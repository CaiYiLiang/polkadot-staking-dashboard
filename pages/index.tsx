import { useState } from 'react';
import { useAppContext } from '../context/state';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import { StakingStatsContent } from '../components';
import { getNetworkConfigs } from '../utils';
import { Validators } from '../components/Validators';

export default function Home() {
  const [showValidators, setShowValidators] = useState(false);
  const { network, setNetwork, stakeReturn } = useAppContext();
  const onChangeNetwork = (choosedNetwork) => setNetwork(choosedNetwork);
  const networkConfigs = getNetworkConfigs(network);
  const { token } = networkConfigs;

  return (
    <section className="flex-1">
      <div className="h-full flex flex-col pt-4">
        <div className="h-16 flex px-10 justify-between items-center">
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
          <div className="flex flex-row items-stretch w-1/6 content-around">
            <button
              className={`font-medium mx-4 ${
                !showValidators
                  ? `font-semibold text-subvis-primary-focus border-b-2 border-b-indigo-400`
                  : `font-medium`
              }`}
              onClick={() => setShowValidators(false)}
            >
              Overview
            </button>
            <button
              className={`font-medium mx-4 ${
                showValidators
                  ? `font-semibold text-subvis-primary-focus border-b-2 border-b-indigo-400`
                  : `font-medium`
              }`}
              onClick={() => setShowValidators(true)}
            >
              Validator
            </button>
          </div>
          <div className="">{new Date().toLocaleString()}</div>
        </div>

        {showValidators && <Validators />}
        {!showValidators && <StakingStatsContent />}
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
