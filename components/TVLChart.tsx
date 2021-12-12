import dynamic from 'next/dynamic';
/* eslint-disable indent */
// import ReactApexChart from 'react-apexcharts';
import { toDayjs, toHumanNumber } from '../utils/index';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface ITVLChart {
  yData: Array<string>;
  xData: Array<string>;
  blockNum: Array<number>;
  time: Array<string>;
}

export const TVLChart = ({ yData, xData, blockNum, time }: ITVLChart) => {
  const options = {
    id: blockNum[blockNum?.length - 1 || 0],
    colors: '#93C5FD',
    chart: {
      type: 'bar',
      stacked: true,
      toolbar: {
        show: true,
      },
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            // eslint-disable-next-line
            position: 'bottom' as any,
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 5,
      },
    },
    xaxis: {
      type: 'datetime',
      categories: xData,
      axisBorder: {
        show: true,
        color: '#78909C',
        // height: 1,
        // width: '100%',
        // offsetX: 10,
        // offsetY: 0,
      },
      labels: {
        hideOverlappingLabels: true,
        rotate: -10,
        format: 'dd MMM',
      },
      tooltip: {
        followCursor: true,
      },
    },
    yaxis: {
      labels: {
        formatter: (value: number) => toHumanNumber(value, 1),
      },
    },
    tooltip: {
      followCursor: true,
      theme: 'dark',
      onDatasetHover: {
        highlightDataSeries: true,
      },
      custom: ({ dataPointIndex }: any) => {
        return `<div class="px-6 py-4 text-sm">
                <div class="font-medium mb-2">${toDayjs(
                  time[dataPointIndex],
                  'MM/DD/YYYY HH:mm'
                ).format('MMM DD, YYYY hh:mm a')}</div>
                <div>Block no. #${blockNum[dataPointIndex]}</div>
                <div>Staking: ${toHumanNumber(Number.parseInt(yData[dataPointIndex], 10))}</div>
                </div>`;
      },
    },
    legend: {
      position: 'right',
      offsetY: 40,
    },
    fill: {
      opacity: 1,
    },
    noData: {
      text: 'Sorry, there is no data yet.',
      align: 'center',
      verticalAlign: 'middle',
      offsetX: 0,
      offsetY: 0,
      style: {
        color: 'dark',
        fontSize: '14px',
      },
    },
  };

  const seriers = [
    {
      name: 'Staking',
      data: yData,
    },
  ];

  return (
    <div className="h-4/5">
      {yData && yData.length > 0 && (
        <ReactApexChart
          //@ts-ignore
          options={options}
          series={seriers}
          type="bar"
          height={'95%'}
          style={{
            overflow: 'auto',
            width: '100%',
            // paddingBottom: '1rem',
            paddingTop: '1rem',
            display: 'flex',
            alignItems: 'flex-end',
          }}
        />
      )}
    </div>
  );
};
