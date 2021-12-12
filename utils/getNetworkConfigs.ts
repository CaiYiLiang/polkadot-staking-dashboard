export enum Network {
  Kusama = 'kusama',
  Polkadot = 'polkadot',
}

export type Staking = {
  id: string;
  blockNum: number;
  stakingAmount: BigInt;
  timestamp: string;
};

interface InflationParams {
  auctionAdjust: number;
  auctionMax: number;
  falloff: number;
  maxInflation: number;
  minInflation: number;
  stakeTarget: number;
}

const DEFAULT_PARAMS: InflationParams = {
  auctionAdjust: 0,
  auctionMax: 0,
  falloff: 0.05,
  maxInflation: 0.1,
  minInflation: 0.025,
  stakeTarget: 0.5,
};

const kusamaConfigs = {
  name: 'Kusama',
  token: 'KSM',
  decimal: 12,
  inflationParams: {
    ...DEFAULT_PARAMS,
    auctionAdjust: 0.3 / 60,
    auctionMax: 60,
    stakeTarget: 0.75,
  },
};

const polkadotConfigs = {
  name: 'Polkadot',
  token: 'DOT',
  decimal: 10,
  inflationParams: {
    ...DEFAULT_PARAMS,
    stakeTarget: 0.75,
  },
};

export const getNetworkConfigs = (network: Network) => {
  if (network === Network.Polkadot) {
    return polkadotConfigs;
  }

  return kusamaConfigs;
};
