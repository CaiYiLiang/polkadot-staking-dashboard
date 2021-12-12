import type BN from 'bn.js';
import { BN_MILLION } from '@polkadot/util';

interface CalcInflation {
  auctionAdjust: number;
  auctionMax: number;
  falloff: number;
  maxInflation: number;
  minInflation: number;
  stakeTarget: number;
  totalStaked: BN;
  auctionCounter: number;
  totalIssuance: BN;
}

export const calcInflation = ({
  auctionAdjust,
  auctionMax,
  falloff,
  maxInflation,
  minInflation,
  stakeTarget,
  totalStaked,
  auctionCounter,
  totalIssuance,
}: CalcInflation) => {
  const stakedFraction =
    totalStaked.isZero() || totalIssuance.isZero()
      ? 0
      : totalStaked.mul(BN_MILLION).div(totalIssuance).toNumber() / BN_MILLION.toNumber();
  const idealStake = stakeTarget - Math.min(auctionMax, auctionCounter) * auctionAdjust;
  const idealInterest = maxInflation / idealStake;
  const inflation =
    100 *
    (minInflation +
      (stakedFraction <= idealStake
        ? stakedFraction * (idealInterest - minInflation / idealStake)
        : (idealInterest * idealStake - minInflation) *
          Math.pow(2, (idealStake - stakedFraction) / falloff)));

  return {
    idealInterest,
    idealStake,
    inflation,
    stakedFraction,
    stakedReturn: stakedFraction ? inflation / stakedFraction : 0,
  };
};
