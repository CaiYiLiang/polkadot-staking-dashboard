import { createContext, useContext } from 'react';
import { Network } from '../utils/getNetworkConfigs';

const defaultSate = {
  network: Network.Polkadot,
  setNetwork: (network) => {},

  stakeReturn: 0,
  setStakeReturn: (stakeReturn) => {},
};

const AppContext = createContext(defaultSate);

export function AppWrapper({ children, state }) {
  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
