import dynamic from 'next/dynamic';
import { min } from 'lodash-es';
/* eslint-disable indent */
// import ReactApexChart from 'react-apexcharts';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface ITVLChart {
  yData: Array<string | number>;
  xData: Array<string>;
  blockNum?: Array<number>;
  onClose?: () => void;
  xDataTitle?: String;
  yDataTitle?: String;
}

export const HistoryCharts = ({
  yData,
  xData,
  blockNum,
  onClose,
  xDataTitle,
  yDataTitle,
}: ITVLChart) => {
  const seriers = [
    {
      name: yDataTitle || 'History',
      data: yData,
    },
    {
      name: xDataTitle || 'Era',
      data: xData,
    },
  ];

  const options = {
    id: `yData - ${new Date().getTime()}`,
    chart: {
      height: 350,
      type: 'area',
    },

    series: [
      {
        name: 'Reward Points',
        data: yData,
      },
    ],
    stroke: {
      curve: 'smooth',
    },
    title: {
      text: 'History of reward points',
      align: 'left',
    },

    fill: {
      colors: 'blue',
      opacity: 0.6,
      //   type: 'gradient',
      //   gradient: {
      //     shadeIntensity: 1,
      //     opacityFrom: 0.7,
      //     opacityTo: 0.9,
      //     stops: [0, 100],
      //   },
    },
    plotOptions: {
      area: {
        fillTo: 'origin',
      },
    },
    xaxis: {
      categories: xData,
    },
    legend: {
      horizontalAlign: 'left',
    },
    yaxis: {
      min: min(yData) || 0,
      axisBorder: {
        show: true,
        color: '#78909C',
        offsetX: 0,
        offsetY: 0,
      },
      logBase: 5,
    },
  };

  return (
    <div className="h-4/5">
      {yData && yData?.length > 0 && (
        <ReactApexChart
          //@ts-ignore
          options={options}
          series={seriers}
          //   type="area"
          //   height={'95%'}
          style={{
            color: 'gray',
            padding: '1rem',
          }}
        />
      )}
    </div>
  );
};
