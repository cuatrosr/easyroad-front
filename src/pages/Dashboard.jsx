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
  let dataPie = [200, 20, 400];
  const working =
    (dataPie[1] / dataPie.reduce((total, valor) => total + valor, 0)) * 100;
  const alert =
    (dataPie[2] / dataPie.reduce((total, valor) => total + valor, 0)) * 100;
  const disconnected =
    (dataPie[0] / dataPie.reduce((total, valor) => total + valor, 0)) * 100;
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
                    text: '',
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
                    text: '',
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
                height: '65%',
              }}
            >
              <Doughnut
                data={{
                  datasets: [
                    {
                      data: dataPie,
                      backgroundColor: [
                        'rgba(156, 156, 156)', // Disconnected
                        'rgba(105, 75, 219)', // Working
                        'rgba(255, 119, 119)', // Alert
                      ],
                      borderColor: [
                        'rgba(156, 156, 156, 1)',
                        'rgba(105, 75, 219, 1)',
                        'rgba(255, 119, 119, 1)',
                      ],
                    },
                  ],
                }}
                options={{
                  cutout: '75%', // Ajusta el tamaño del agujero (grosor) cambiando este valor
                  elements: {},
                  responsive: true,
                  maintainAspectRatio: false,
                }}
              />
            </Box>

            <Box
              sx={{
                marginTop: '1rem',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                height: '10%',
                width: '100%',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  width: 'fit-content',
                  fontSize: '0.5em', // Establecer el tamaño de la fuente a la mitad
                }}
              >
                <div
                  style={{
                    marginRight: '100px',
                    backgroundColor: 'rgba(105, 75, 219)',
                    width: '15px',
                    height: '15px',
                    position: 'absolute',
                    zIndex: 1,
                  }}
                ></div>
                <div
                  style={{
                    fontWeight: 'bold',
                  }}
                >
                  Working
                </div>
                <div>{`${working.toFixed(2)}%`}</div>
              </div>

              <div
                style={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  width: 'fit-content',
                  fontSize: '0.5em', 
                }}
              >
                <div
                  style={{
                    marginRight: '60px',
                    backgroundColor: 'rgba(255, 119, 119)',
                    width: '15px',
                    height: '15px',
                    position: 'absolute',
                    zIndex: 1,
                  }}
                ></div>
                <div
                  style={{
                    fontWeight: 'bold',
                  }}
                >
                  Alert
                </div>
                <div>{`${alert.toFixed(2)}%`}</div>
              </div>

              <div
                style={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  width: 'fit-content',
                  fontSize: '0.5em',
                }}
              >
                <div
                  style={{
                    marginRight: '150px',
                    backgroundColor: 'rgba(156, 156, 156)',
                    width: '15px',
                    height: '15px',
                    position: 'absolute',
                    zIndex: 1,
                  }}
                ></div>
                <div
                  style={{
                    fontWeight: 'bold',
                  }}
                >
                  Disconnected
                </div>
                <div>{`${disconnected.toFixed(2)}%`}</div>
              </div>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
