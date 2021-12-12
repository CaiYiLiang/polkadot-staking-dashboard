import BN from 'bn.js';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import Humanize from 'humanize-plus';

export * from './getNetworkConfigs';
export * from './calcInflation';

// export const isDev = process.env?.REACT_APP_STAGE === 'dev';

// Big(value)
// .div(10 ** decimal)
// .toNumber()
// .toFixed(2);
// eslint-disable-next-line
export const parseBigInt = (value: any, decimal = 12) =>
  new BN(value).div(new BN(10 ** decimal)).toNumber();

export const parseUTCDate = (timeStamp: string, format = 'MM/DD/YYYY') => {
  dayjs.extend(utc);
  const date = dayjs.utc(timeStamp).format(format);
  return date;
};

export const parseUTCTime = (timeStamp: string, format = 'MM/DD/YYYY HH:mm') => {
  dayjs.extend(utc);
  const time = dayjs.utc(timeStamp).format(format);
  return time;
};

export const toDayjs = (date: string, format = 'MM/DD/YYYY') => {
  dayjs.extend(customParseFormat);
  return dayjs(date, format);
};

export const toPercentage = (num = 0) => {
  return `${num.toFixed(2)}%`;
};

export const toHumanNumber = (num = 0, decimal = 4) => {
  return Humanize.compactInteger(num, decimal);
};

export const isPositiveNumber = (str) => /^\+?([1-9]\d*)$/.test(str);
