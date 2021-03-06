import { useEffect } from 'react';
import BN from 'bn.js';
import {
  calcInflation,
  getNetworkConfigs,
  Network,
  parseBigInt,
  toHumanNumber,
  toPercentage,
} from '../utils';
import { useAppContext } from '../context/state';

const stakingTVLTooltip = {
  [Network.Kusama]: `This is the total amount of KSM bonded by nominators and validators on Kusama in order to secure the network. 
    * Funds that are in the unbonding period, or staking rewards are not included.`,
  [Network.Polkadot]: `This is the total amount of DOT bonded by nominators and validators on Polkadot in order to secure the network.
    ** Funds that are in the unbonding period, or staking rewards are not included`,
};

const stakingRateTooltip = {
  [Network.Kusama]: `This rate is calculated by (KSM staking TVL) / (Total KSM supply)*100%. * Ideal staking rate is 75%.`,
  [Network.Polkadot]: `This rate is calculated by (DOT staking TVL) / (Total DOT supply)*100%. ** Ideal staking rate is 75%`,
};

const parachainTVLTooltip = {
  [Network.Kusama]:
    'This is the total amount of KSM locked on the winning parachains until their lease ends. The funds come from either crowdloan or private bids.',
  [Network.Polkadot]:
    'This is the total amount of DOT locked on the winning parachains until their lease ends. The funds come from either crowdloan or private bids.',
};

const auctionTVLTooltip = {
  [Network.Kusama]:
    'This is the total amount of KSM locked for contributing to an ongoing crowdloan or by bidding privately to secure a slot in the slot auction.',
  [Network.Polkadot]:
    'This is the total amount of DOT locked for contributing to an ongoing crowdloan or by bidding privately to secure a slot in the slot auction.',
};

interface ITVLStatCards {
  totalStaked?: string;
  curTotalIssuance?: string;
  curAuctionCounter?: number;
  loading?: boolean;
}

export const TVLStatCards = ({
  totalStaked,
  curAuctionCounter,
  curTotalIssuance,
}: ITVLStatCards) => {
  const { network, setStakeReturn } = useAppContext();
  const networkConfigs = getNetworkConfigs(network);
  const { inflationParams, decimal } = networkConfigs;

  const inflationCalResult =
    totalStaked &&
    curTotalIssuance &&
    calcInflation({
      ...inflationParams,
      totalStaked: new BN(totalStaked),
      totalIssuance: new BN(curTotalIssuance),
      auctionCounter: curAuctionCounter || 0,
    });

  const { stakedReturn, stakedFraction = 0, inflation } = inflationCalResult || {};

  // TODO: Improve
  useEffect(() => {
    setStakeReturn(stakedReturn);
  }, [stakedReturn, setStakeReturn]);

  const stakingStatsInfo = [
    {
      label: 'Current staking TVL',
      tooltip: stakingTVLTooltip[network],
      value: toHumanNumber(parseBigInt(totalStaked || 0, decimal)),
    },
    {
      label: 'Staking rate',
      tooltip: stakingRateTooltip[network],
      value: toPercentage(stakedFraction * 100),
    },
    {
      label: 'Staking return',
      value: toPercentage(stakedReturn),
    },
    {
      label: 'Inflation rate',
      value: toPercentage(inflation),
    },
  ];

  return (
    <div className="w-full flex justify-between">
      {stakingStatsInfo.map((stakingStat, idx) => (
        <div key={`staking-stat-${idx}`}>
          <div className="stat-title text-header">{stakingStat?.label}</div>
          <div className="stat-value text-subvis-primary-focus">{stakingStat?.value || '-'}</div>
        </div>
      ))}
    </div>
  );
};
