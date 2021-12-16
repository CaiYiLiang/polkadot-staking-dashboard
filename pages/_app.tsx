import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import type { ReactElement, ReactNode } from 'react';
import { AppWrapper } from '../context/state';
import '../styles/globals.css';
import { ApolloProvider } from '@apollo/client';
import { client } from '../apolloClient';
import { Network } from '../utils/getNetworkConfigs';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const Application: React.FC<AppPropsWithLayout> = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page);

  const [network, setNetwork] = useState<Network>(Network.Polkadot);
  const [stakeReturn, setStakeReturn] = useState(0);
  return (
    <ApolloProvider client={client}>
      <AppWrapper state={{ network: network, setNetwork, stakeReturn, setStakeReturn }}>
        {getLayout(<Component {...pageProps} />)}
      </AppWrapper>
    </ApolloProvider>
  );
};

export default Application;
