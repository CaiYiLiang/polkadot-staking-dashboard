import { useContext, useMemo } from 'react';
import { reverse, uniqBy } from 'lodash-es';
import { Loading, TVLChart } from '.';
import {
  getNetworkConfigs,
  Network,
  parseBigInt,
  parseUTCDate,
  parseUTCTime,
  Staking,
} from '../utils';
import { LINKS } from '../constants';

import { useGetEraTotalStakingQuery, useGetChronicleQuery } from '../generated/totalStaking';
import { TVLStatCards } from './TVLStatCards';
import { ErrorCard } from './ErrorCard';
import { useAppContext } from '../context/state';
import { Calculator } from './Calculator';

// NOTE: CurBlock info
export const StakingStatsContent = () => {
  const { network, stakeReturn } = useAppContext();
  const networkConfigs = getNetworkConfigs(Network.Polkadot);
  const { token, decimal } = networkConfigs;

  const {
    data: chronicleData,
    loading: fetchingChronicle,
    // eslint-disable-next-line
    error: fetchChronicleError,
  } = useGetChronicleQuery({
    context: { clientName: network },
    pollInterval: 6000,
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'no-cache',
  });

  console.log('chronicleData', chronicleData?.chronicle);
  console.log('fetchChronicleError', fetchChronicleError);
  const { curBlockNum, curEra, curTotalIssuance, curAuctionCounter } =
    chronicleData?.chronicle || {};

  // NOTE: Staking
  const {
    data,
    loading: fetchingStakingData,
    // eslint-disable-next-line
    error: fetchingStakingError,
  } = useGetEraTotalStakingQuery({
    context: { clientName: network },
    pollInterval: 6000,
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'no-cache',
  });

  const stakings = (data?.stakings?.nodes || []) as Array<Staking>;
  const totalStaked = stakings && stakings[0]?.stakingAmount;

  const formatedStakings = stakings.map((staking) => {
    const { id, blockNum, stakingAmount, timestamp } = staking;
    const totalStaking = parseBigInt(stakingAmount, decimal);
    const date = parseUTCDate(timestamp);
    const time = parseUTCTime(timestamp);
    return { era: id, blockNum, totalStaking, date, time };
  });

  // eslint-disable-next-line
  // console.log('formatedStakings', formatedStakings);
  const stakingData = useMemo(
    () =>
      reverse(uniqBy(formatedStakings, 'date')).reduce(
        (result, formatedStaking) => {
          const { date, totalStaking, blockNum, time } = formatedStaking;
          return {
            data: [...result.data, totalStaking],
            date: [...result.date, date],
            blockNum: [...result.blockNum, blockNum],
            time: [...result.time, time],
          };
        },
        // eslint-disable-next-line
        {
          data: [] as any,
          date: [] as any,
          blockNum: [] as any,
          time: [] as any,
        }
      ),
    [formatedStakings]
  );
  const { data: stakingAmount, date, blockNum, time } = stakingData;
  // console.log('blockNum', blockNum);
  console.log('stakeReturn', stakeReturn);

  const isLoading = fetchingStakingData && stakingAmount.length <= 0;

  return (
    <div className="bg-mainBg px-8 py-4 h-full">
      <div className="h-12 flex justify-between align-center">
        <div className="card-title text-header">
          <h4>Staking stats</h4>
        </div>
        <div>
          <div>Era: {curEra}</div>
          <div>Block: {curBlockNum}</div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col mt-4 h-1/2">
        <div className="w-full h-full bg-white rounded-xl p-1 sm:p-4 ">
          <TVLStatCards
            totalStaked={totalStaked?.toString()}
            curTotalIssuance={curTotalIssuance?.toString()}
            curAuctionCounter={curAuctionCounter || 0}
          />
          {!!fetchingStakingError && <ErrorCard />}
          {isLoading && <Loading />}
          {!isLoading && !fetchingStakingError && (
            <TVLChart xData={date} yData={stakingAmount} blockNum={blockNum} time={time} />
          )}
        </div>
      </div>
      <div>
        <Calculator returnRate={stakeReturn} unit={token} amount={1000} />
      </div>
    </div>
  );
};
