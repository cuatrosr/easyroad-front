import { Bar } from 'react-chartjs-2';
import { Chart, BarElement, CategoryScale } from 'chart.js';

Chart.register(BarElement, CategoryScale);

const BarChart = () => {
  return (
    <Bar
      data={{
        labels: [
          'Project 1',
          'Project 2',
          'Project 3',
          'Project 4',
          'Project 5',
          'Project 6',
        ],
        datasets: [
          {
            label: 'Working',
            data: [200, 300, 400, 500, 600, 700],
            backgroundColor: 'rgba(105, 75, 219, 1)',
          },
          {
            label: 'Alert',
            data: [120, 190, 300, 500, 200, 300],
            backgroundColor: 'rgba(255, 119, 119, 1)',
          },
        ],
      }}
      options={{
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          tooltip: {
            enabled: true,
          },
          legend: {
            display: true,
            position: 'bottom',
          },
          title: {
            display: true,
            text: 'Estado Actual de Proyectos',
            font: {
              size: 20,
            },
          },
        },
      }}
    />
  );
};

export default BarChart;
