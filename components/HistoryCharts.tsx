import dynamic from 'next/dynamic';
/* eslint-disable indent */
// import ReactApexChart from 'react-apexcharts';
import { toDayjs, toHumanNumber } from '../utils/index';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface ITVLChart {
  yData: Array<string | number>;
  xData: Array<string>;
  blockNum?: Array<number>;
}

export const HistoryCharts = ({ yData, xData, blockNum }: ITVLChart) => {
  const options = {
    // id: blockNum[blockNum?.length - 1 || 0],
    colors: '#93C5FD',
    chart: {
      type: 'area',
      height: 350,
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
    },
    title: {
      text: 'History of reward points',
      align: 'left',
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
      type: 'category',
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
    // tooltip: {
    //   followCursor: true,
    //   theme: 'dark',
    //   onDatasetHover: {
    //     highlightDataSeries: true,
    //   },
    //   custom: ({ dataPointIndex }: any) => {
    //     return `<div class="px-6 py-4 text-sm">
    //             <div>Block no. #${blockNum[dataPointIndex]}</div>
    //             <div>Staking: ${toHumanNumber(Number.parseInt(yData[dataPointIndex], 10))}</div>
    //             </div>`;
    //   },
    // },
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
