import { Doughnut } from 'react-chartjs-2';
import { ArcElement, Chart } from 'chart.js';

Chart.register(ArcElement);

const DoughnutChart = () => {
  return (
    <Doughnut
      data={{
        labels: ['Disconnect', 'Alert', 'Working'],
        datasets: [
          {
            data: [20, 200, 400],
            backgroundColor: [
              'rgba(156, 156, 156, 1)',
              'rgba(255, 119, 119, 1)',
              'rgba(105, 75, 219, 1)',
            ],
          },
        ],
      }}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        cutout: '60%',
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
          },
          title: {
            display: true,
            text: 'Estado Actual de Postes',
            font: {
              size: 20,
            },
          },
        },
      }}
    />
  );
};

export default DoughnutChart;
