import { getNetworkConfigs, parseBigInt } from '../utils';

import {
  useGetChronicleQuery,
  useGetEraStakingsQuery,
  useGetMetaDataQuery,
  useGetValidatorsQuery,
} from '../generated/validators';
import { useAppContext } from '../context/state';
import { ValidatorsTable } from './VlidatorsTable';
import { AiOutlineAreaChart } from 'react-icons/ai';
import { useRef, useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { HistoryCharts } from './HistoryCharts';
import { HistoryRecharts } from './HistoryRecharts';

// NOTE: CurBlock info
export const Validators = () => {
  const [showHistoyChart, setShowHistoyChart] = useState(false);
  const [historyChartKey, setHistoryChartKey] = useState<String | null>();
  const { network, stakeReturn } = useAppContext();
  const networkConfigs = getNetworkConfigs(network);
  const { token, decimal } = networkConfigs;

  const {
    data: metaData,
    loading: isFetchingMetaData,
    // eslint-disable-next-line
    error: fetchMetaDataError,
  } = useGetMetaDataQuery({
    context: { clientName: `${network}_validators` },
    pollInterval: 6000,
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'no-cache',
  });

  const {
    data: chronicle,
    loading: isFetchingChronicle,
    // eslint-disable-next-line
    error: fetchChronicleError,
  } = useGetChronicleQuery({
    context: { clientName: `${network}_validators` },
    pollInterval: 6000,
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'no-cache',
  });

  const { curBlockNum, curEra, curTotalIssuance, curAuctionCounter, curSessionIndex } =
    chronicle?.chronicle || {};

  const {
    data: eraStakingData,
    loading: isFetchingEraStaking,
    // eslint-disable-next-line
    error: fetchEraStakingError,
  } = useGetEraStakingsQuery({
    context: { clientName: `${network}_validators` },
    pollInterval: 6000,
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'no-cache',
  });

  const {
    stakingValidatorCount,
    counterForValidators,
    counterForNominators,
    stakingEraRewardPoints,
  } = eraStakingData?.stakings.nodes[0] || {};

  const { stakingEraPayout } = eraStakingData?.stakings.nodes[1] || {};
  const eraStakingHistory = eraStakingData?.stakings?.nodes?.slice(1);

  const xData = eraStakingHistory?.reverse().map((history) => history.id);
  const yData = eraStakingHistory
    ?.reverse()
    .map((history) =>
      historyChartKey === 'rewardPoints'
        ? history.stakingEraRewardPoints
        : parseBigInt(history.stakingEraPayout, decimal)
    );

  const {
    data: validatorData,
    loading: isFetchingValidatorData,
    // eslint-disable-next-line
    error: fetchValidatorError,
  } = useGetValidatorsQuery({
    context: { clientName: `${network}_validators` },
    variables: { curSessionIdx: curSessionIndex },
    pollInterval: 6000,
    notifyOnNetworkStatusChange: true,
    nextFetchPolicy: 'no-cache',
  });

  const { nodes, totalCount } = validatorData?.validators || {};
  //   console.log('totalCount', totalCount);

  let sortedValidators = [];
  if (nodes?.length > 0) {
    sortedValidators = nodes.map((validator) => {
      const {
        commission: toSortedCommission,
        ownStake: toSortedOwnStake,
        totalStake: toSortedTotalStake,
        eraRewardsPoints,
        identityDisplayName: toSortedIdentityName,
        latestPayoutTimestamp,
        nominatorCount,
        stashAddress,
        id,
        eraProducedBlockCount,
      } = validator;

      const commission = Number.parseInt(toSortedCommission) / 10 ** (decimal - 1);
      const ownStake = parseBigInt(toSortedOwnStake, decimal);
      const totalStake = parseBigInt(toSortedTotalStake, decimal);
      const nominatorStake = totalStake - ownStake;
      const identityDisplayName = toSortedIdentityName && toSortedIdentityName.replace('\\0', '');
      return {
        id,
        commission,
        ownStake,
        totalStake,
        nominatorStake,
        eraRewardsPoints,
        identityDisplayName,
        latestPayoutTimestamp,
        nominatorCount,
        stashAddress,
        eraProducedBlockCount,
      };
    });
  }

  console.log(
    `stakingValidatorCount ${stakingValidatorCount} stakingEraPayout ${stakingEraPayout}`
  );
  const statsCards = [
    {
      label: 'Active Validators',
      value: totalCount || stakingValidatorCount,
      key: 'activeValidator',
    },
    {
      label: 'Waiting',
      value:
        counterForValidators && totalCount && counterForValidators > totalCount
          ? counterForValidators - totalCount
          : '-',
      key: 'waitingValidator',
    },
    {
      label: 'Nominators',
      value: counterForNominators,
      key: 'nominators',
    },
    {
      label: 'Reward points / Era',
      value: stakingEraRewardPoints,
      key: 'rewardPoints',
    },
    {
      label: 'Payout/Last Era',
      value: parseBigInt(stakingEraPayout, decimal),
      key: 'payout',
    },
  ];

  return (
    <div className="bg-mainBg px-10 py-4 h-full">
      <div className="h-12 flex justify-between align-center my-4">
        <div className="card-title text-header">
          <h4>Staking stats</h4>
        </div>
        <div>
          <div>Era: {curEra}</div>
          <div>Block: {curBlockNum}</div>
        </div>
      </div>
      <div className="w-full flex justify-between my-8 bg-white px-5 py-6 rounded-3xl">
        {statsCards.map((stakingStat, idx) => (
          <div key={`staking-stat-${idx}`}>
            <div className="stat-title text-header flex items-center">
              {stakingStat?.label}
              {['rewardPoints', 'payout'].includes(stakingStat?.key) && (
                <AiOutlineAreaChart
                  className="ml-2 cursor-pointer text-2xl font-bold text-subvis-primary"
                  onClick={() => {
                    setHistoryChartKey(stakingStat?.key);
                    setShowHistoyChart(true);
                  }}
                />
              )}
            </div>
            <div className="stat-value text-subvis-primary-focus">{stakingStat?.value || '-'}</div>
          </div>
        ))}
      </div>
      <ValidatorsTable data={sortedValidators} />
      <Popup
        open={showHistoyChart}
        onClose={() => {
          setHistoryChartKey(null);
          setShowHistoyChart(false);
        }}
        position="right center"
        closeOnDocumentClick
      >
        {yData?.length > 0 && xData?.length > 0 && (
          <HistoryCharts
            yData={yData.reverse()}
            xData={xData.reverse()}
            yDataTitle={historyChartKey === 'rewardPoints' ? 'Rewards Points' : 'Payout'}
          />
        )}
      </Popup>
    </div>
  );
};
