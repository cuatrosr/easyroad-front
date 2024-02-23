import { Line } from 'react-chartjs-2';
import {
  Chart,
  LineElement,
  LinearScale,
  PointElement,
} from 'chart.js';

Chart.register(LinearScale, LineElement, PointElement);

const LineChart = () => {
  return (
    <Line
      data={{
        labels: [
          'Enero',
          'Febrero',
          'Marzo',
          'Abril',
          'Mayo',
          'Junio',
          'Julio',
          'Agosto',
        ],
        datasets: [
          {
            label: 'Working',
            lineTension: 0.4,
            data: [1, 2, 1, 4, 5, 6, 7, 8],
            borderColor: 'rgba(105, 75, 219, 1)',
            backgroundColor: 'rgba(105, 75, 219, 0.5)',
          },
          {
            label: 'Alert',
            lineTension: 0.4,
            data: [8, 7, 6, 5, 4, 3, 2, 1],
            borderColor: 'rgba(255, 119, 119, 1)',
            backgroundColor: 'rgba(255, 119, 119, 0.5)',
          },
        ],
      }}
      options={{
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          x: {
            type: 'category',
            labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago'],
          },
          y: {
            beginAtZero: true,
          },
        },
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
            text: 'Postes Historicos',
            font: {
              size: 20,
            },
          },
        },
      }}
    />
  );
};

export default LineChart;
