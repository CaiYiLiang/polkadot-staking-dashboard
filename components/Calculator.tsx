import { useState } from 'react';
import { useAppContext } from '../context/state';
import { getNetworkConfigs, isPositiveNumber, toPercentage } from '../utils';

interface ICalculator {
  unit?: string;
  title?: string;
  returnRate: number;
  amount: number;
}

export const Calculator = ({
  unit,
  returnRate,
  title = 'Reward calculator',
  amount,
}: ICalculator) => {
  const [stakeAmount, setStakeAmount] = useState(amount || 1000);
  const [isInvalidInput, setIsInvalidInput] = useState(false);
  const yearlyReturn = (returnRate / 100) * stakeAmount;
  const monthlyReturn = yearlyReturn / 12;
  const dailyReturn = monthlyReturn / 30;

  const onInputStakeAmount = (e) => {
    setIsInvalidInput(false);
    console.log('input', e.target.value);
    setStakeAmount(e.target.value);
    const isValidateNumber = isPositiveNumber(e.target.value);
    if (isValidateNumber) {
      setStakeAmount(e.target.value);
    } else {
      setIsInvalidInput(true);
    }
  };

  return (
    <div className="my-8">
      <div className="card-title text-gray-600">{title}</div>
      <div className="h-64 flex bg-subvis-primary-focus rounded-2xl text-white items-center">
        <div className="h-full w-2/3 bg-subvis-primary rounded-2xl flex items-center px-4">
          <div className="w-full">
            <div className="card-title">{`Staked Amount ${unit && `(${unit})`} ${
              returnRate && `- ${toPercentage(returnRate)} APR`
            }`}</div>
            <input
              type="text"
              placeholder="Please input stake amount."
              className={`input bg-white text-primary  w-full ${isInvalidInput && 'input-error'}`}
              onChange={onInputStakeAmount}
              value={stakeAmount}
              defaultValue={1000}
            />
            {isInvalidInput && (
              <label className="label">
                <span className="label-text-alt">The input is invalid.</span>
              </label>
            )}
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="w-1/2">
            <div>Yearly Return</div>
            <div className="card-title">{`${
              yearlyReturn ? yearlyReturn.toFixed(2) : '-'
            } ${unit}`}</div>
            <div>30 days Return</div>
            <div className="card-title">{`${
              monthlyReturn ? monthlyReturn.toFixed(2) : '-'
            } ${unit}`}</div>
            <div>1 day Return</div>
            <div className="card-title">{`${
              dailyReturn ? dailyReturn.toFixed(2) : '-'
            } ${unit}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
