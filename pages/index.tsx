import Head from 'next/head';
import { useEffect, useState } from 'react';
import Text from '../components/Text';
import { useAppContext } from '../context/state';
import { useGetChronicleQuery } from '../generated/graphql';
import { ApiPromise, WsProvider } from '@polkadot/api';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import { StakingStatsContent } from '../components';
import { Calculator } from '../components/Calculator';
import { getNetworkConfigs } from '../utils';

export default function Home() {
  const { network, setNetwork, stakeReturn } = useAppContext();
  const onChangeNetwork = (choosedNetwork) => setNetwork(choosedNetwork);
  const networkConfigs = getNetworkConfigs(network);
  const { token } = networkConfigs;
  // const {
  //   data: chronicleData,
  //   loading: fetchingChronicle,
  //   error: fetchChronicleError,
  // } = useGetChronicleQuery({
  //   context: { clientName: network },
  //   pollInterval: 9000,
  //   notifyOnNetworkStatusChange: true,
  // });
  // console.log('data', chronicleData);
  // const curBlock = chronicleData?.chronicle.curBlockNum;
  // const curEra = chronicleData?.chronicle.curEra;

  // useEffect(() => {
  //   setCurBlockNum(curBlock);
  //   setCurrentEra(curEra);
  // }, [curBlock, currentEra]);

  // useEffect(() => {
  //   setCurBlockNum('-');
  //   setCurrentEra('-');
  // }, [network]);

  return (
    <section className="flex-1">
      <div className="h-full flex flex-col pt-4">
        <div className="h-16 flex px-10">
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} className="m-1 btn btn-sm btn-outline btn-primary w-32">
              {network}
            </div>
            <ul
              tabIndex={0}
              className="p-2 shadow menu dropdown-content bg-white text-primary rounded-box w-32"
            >
              <li className="hover:bg-subvis-primary-focus">
                <button onClick={() => onChangeNetwork('polkadot')}>Polkadot</button>
              </li>
              <li className="hover:bg-subvis-primary-focus">
                <button onClick={() => onChangeNetwork('kusama')}>Kusama</button>
              </li>
              <li className="hover:bg-gray-700 hover:cursor-no-drop">
                <button disabled className="cursor-no-drop">
                  Moonriver
                </button>
              </li>
            </ul>
          </div>
        </div>

        <StakingStatsContent />
      </div>
    </section>
  );
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  );
};
