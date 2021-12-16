import Tooltip from 'rc-tooltip';
import { getNetworkConfigs, toPercentage, truncateLongStr } from '../utils';
import { useAppContext } from '../context/state';

const TextField = ({ children }) => <span className="font-normal">{children}</span>;

export const ValidatorsTable = ({ data }) => {
  const { network, stakeReturn } = useAppContext();
  const networkConfigs = getNetworkConfigs(network);
  const { token, decimal } = networkConfigs;

  console.log('data', data);
  const validatorsTableCols = [
    'validator',
    'Nominators',
    `Total Stake (${token})`,
    `Self Stake (${token})`,
    `Nominator Stake (${token})`,
    'Commission',
    'rewardPoints',
    'Payout',
  ];

  return (
    <div className="bg-mainBg h-full">
      <div className="w-full">
        <table className="table w-full bg-white">
          <thead className="mb-4 h-20">
            <tr className="bg-white">
              {validatorsTableCols.map((col) => (
                <th key={col}>{col}</th>
              ))}
            </tr>
          </thead>

          <tbody className="bg-white mt-4">
            {data.map((validator) => (
              <tr key={validator.id}>
                <th>
                  <Tooltip
                    overlay={<span>{validator.stashAddress}</span>}
                    trigger={['hover']}
                    placement="top"
                  >
                    <span className="font-normal cursor-pointer">
                      {truncateLongStr(
                        validator.identityDisplayName || validator.stashAddress,
                        20,
                        '...'
                      )}
                    </span>
                  </Tooltip>
                </th>
                <th>
                  <TextField>{validator.nominatorCount}</TextField>
                </th>
                <th>
                  <TextField>{validator.totalStake}</TextField>
                </th>
                <th>
                  <TextField>{validator.ownStake}</TextField>
                </th>
                <th>
                  <TextField>{validator.nominatorStake}</TextField>
                </th>
                <th>
                  <TextField>{toPercentage(validator.commission * 100)}</TextField>
                </th>
                <th>
                  <TextField>{validator.eraRewardsPoints}</TextField>
                </th>
                <th>
                  <TextField>{validator.latestPayoutTimestamp ? 'Recently' : '-'}</TextField>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
