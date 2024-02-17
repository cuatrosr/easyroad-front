import { Bar, Doughnut } from 'react-chartjs-2';
import {
  CategoryScale,
  LinearScale,
  BarElement,
  DoughnutController,
  ArcElement,
  Chart,
} from 'chart.js';
import { Box, styled } from '@mui/material';

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  DoughnutController,
  ArcElement,
);

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

function Dashboard() {
  // Etiquetas personalizadas para el gráfico de donut
  const doughnutLabels = [
    'Label 1',
    'Label 2',
    'Label 3',
    'Label 4',
    'Label 5',
  ];

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      <Box
        sx={{
          display: 'flex',
          padding: '0 0.625rem',
          gap: '1.25rem',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '90%',
          mt: '1.7rem',
          flexShrink: 0,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'stretch',
            flex: '1 1 0',
            gap: '1.25rem',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#efefef',
              height: '95%',
              justifyContent: 'center',
              alignSelf: 'stretch',
              flex: '1 1 0',
              gap: '2.5 rem',
              borderRadius: 8,
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
              overflow: 'hidden',
            }}
          >
            {/* Contenido del primer gráfico de barras */}
            <Bar
              data={{
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [
                  {
                    label: '# of Votes',
                    data: [200, 300, 400, 500, 600, 700],
                  },
                  { label: 'Quantity', data: [12, 19, 3, 5, 2, 3] },
                ],
              }}
              options={{
                maintainAspectRatio: true,
                responsive: true,
                plugins: {
                  legend: {
                    display: true,
                    position: 'top',
                  },
                  title: {
                    display: true,
                    text: 'Chart.js Bar Chart',
                    align: 'center',
                    color: 'black',
                  },
                },
              }}
            />
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#efefef',
              height: '95%',
              justifyContent: 'center',
              alignSelf: 'stretch',
              flex: '1 1 0',
              gap: '2.5 rem',
              borderRadius: 8,
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
              overflow: 'hidden',
            }}
          >
            {/* Contenido del segundo gráfico de barras */}
            <Bar
              data={{
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [
                  {
                    label: '# of Votes',
                    data: [200, 300, 400, 500, 600, 700],
                  },
                  { label: 'Quantity', data: [12, 19, 3, 5, 2, 3] },
                ],
              }}
              options={{
                maintainAspectRatio: true,
                responsive: true,
                plugins: {
                  legend: {
                    display: true,
                    position: 'top',
                  },
                  title: {
                    display: true,
                    text: 'Chart.js Bar Chart',
                    align: 'center',
                    color: 'black',
                  },
                },
              }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'stretch',
            flex: '1 1 0',
            gap: '1.25rem',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#efefef',
              height: '95%',
              justifyContent: 'center',
              alignSelf: 'stretch',
              flex: '1 1 0',
              gap: '2.5rem',
              borderRadius: 8,
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
              overflow: 'hidden',
            }}
          ></Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#efefef',
              height: '95%',
              flexDirection: 'column',
              justifyContent: 'center',
              alignSelf: 'stretch',
              flex: '0.6',
              gap: '2.5 rem',
              borderRadius: 8,
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
              overflow: 'hidden',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                marginTop: '0.5rem',
                flexDirection: 'column',
                height: '80%',
              }}
            >
              <Doughnut
                sx={{
                  width: '50px',
                  height: '50px',
                  marginLeft: '5rem',
                }}
                data={{
                  labels: doughnutLabels,
                  datasets: [
                    {
                      data: [200, 300, 400],
                      backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                      ],
                      borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                      ],
                      borderWidth: 1,
                    },
                  ],
                }}
                options={{
                  maintainAspectRatio: true,
                  responsive: true,
                  plugins: {
                    legend: {
                      display: true,
                      position: 'top',
                      labels: {
                        color: 'black',
                      },
                    },
                    title: {
                      display: true,
                      text: 'Chart.js Doughnut Chart',
                      align: 'center',
                      color: 'black',
                    },
                  },
                }}
              />
            </Box>
            <Box
              sx={{
                marginTop: '0.5rem',
                display: 'flex',
                flexDirection: 'row',
                
                height: '50%',
                width: '100%',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  marginLeft: '4.5rem',
                  position: 'relative',
                  width: '20px',
                  height: '20px', // Aumenté la altura para asegurar que el texto se muestre completamente
                }}
              >
                <div
                  style={{
                    backgroundColor: 'rgba(255, 99, 132, 0.6)',
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    zIndex: 1,
                  }}
                ></div>
                <div
                  style={{
                    position: 'relative',
                    zIndex: 4,
                  }}
                >
                  Working
                </div>
              </div>




              <div
                style={{
                  marginLeft: '4.5rem',
                  position: 'relative',
                  width: '20px',
                  height: '20px', // Aumenté la altura para asegurar que el texto se muestre completamente
                }}
              >
                <div
                  style={{
                    backgroundColor: 'rgba(54, 162, 235, 0.6)',
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    zIndex: 1,
                  }}
                ></div>
                <div
                  style={{
                    position: 'relative',
                    zIndex: 4,
                  }}
                >
                  Alert
                </div>
              </div>





              <div
                style={{
                  marginLeft: '4.5rem',
                  position: 'relative',
                  width: '20px',
                  height: '20px', // Aumenté la altura para asegurar que el texto se muestre completamente
                }}
              >
                <div
                  style={{
                    backgroundColor: 'rgba(255, 206, 86, 0.6)',
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    zIndex: 1,
                  }}
                ></div>
                <div
                  style={{
                    position: 'relative',
                    zIndex: 4,
                  }}
                >
                  Disconnected
                </div>
              </div>
            
             
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
