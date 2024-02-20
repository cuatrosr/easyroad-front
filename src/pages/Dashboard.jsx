import { Bar, Doughnut, Line } from 'react-chartjs-2';
import {
  CategoryScale,
  LinearScale,
  BarElement,
  DoughnutController,
  ArcElement,
  Chart,
  PointElement,
  LineElement,
} from 'chart.js';
import { Box, styled,Grid  } from '@mui/material';
Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  DoughnutController,
  ArcElement,
  PointElement,
  LineElement,
);

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

function Dashboard() {
  const lineData = {
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
        label: 'Datos de la Línea 1',
        data: [1, 2, 1, 4, 5, 6, 7, 8],
        borderColor: 'rgba(105, 75, 219, 1)',
        backgroundColor: 'rgba(69, 177, 223, 0.5)',
        fill: false,
      },
      {
        label: 'Datos de la Línea 2',
        data: [8, 7, 6, 5, 4, 3, 2, 1],
        borderColor: 'rgba(255, 119, 119, 1)',
        backgroundColor: 'rgba(99, 201, 122, 0.5)',
        fill: false,
      },
    ],
  };

  const lineOptions = {
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
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: true,
        text: 'Gráfico de Líneas Múltiples Chart.js',
        align: 'center',
        color: 'black',
      },
    },
  };
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
              flexDirection: 'column',
            }}
          >
            <Box
              sx={{
                ml: -55,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                }}
              >
                Postes Historico
              </div>
            </Box>

            <Box
              sx={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '0.2rem',
                width: '100%',
                height: '80%',
                marginLeft: '1.5rem',
              }}
            >
              <Line
                data={lineData}
                options={lineOptions}
                height="50%"
                width="150%"
              />
            </Box>
            <Box
              sx={{
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
                  fontSize: '0.5em',
                }}
              >
                <div
                  style={{
                    marginLeft: '-60px',
                    backgroundColor: 'rgba(105, 75, 219, 1)',
                    width: '15px',
                    height: '15px',
                    position: 'absolute',
                    zIndex: 1,
                  }}
                ></div>
                <div
                  style={{
                    fontWeight: 'bold',
                    marginLeft: '5px',
                  }}
                >
                  Working
                </div>
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
                    marginLeft: '-40px',
                    backgroundColor: 'rgba(255, 119, 119, 1)',
                    width: '15px',
                    height: '15px',
                    position: 'absolute',
                    zIndex: 1,
                  }}
                ></div>
                <div
                  style={{
                    fontWeight: 'bold',
                    marginLeft: '5px',
                  }}
                >
                  Alert
                </div>
              </div>
            </Box>
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
            <Box
              sx={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '0.2rem',
                width: '100%',
                height: '80%',
                marginLeft: '1.5rem',
              }}
            >
              <Grid
                gap={2} // Ajusta el espacio entre las celdas según tus necesidades
                columns={[2, '1fr 1fr', '1fr 1fr 1fr 1fr']} // Configura el número de columnas para diferentes tamaños de pantalla
              >
                {/* Contenido de la primera posición */}
                <div>Contenido 1</div>

                {/* Contenido de la segunda posición */}
                <div>Contenido 2</div>

                {/* Contenido de la tercera posición */}
                <div>Contenido 3</div>

                {/* Contenido de la cuarta posición */}
                <div>Contenido 4</div>
              </Grid>
            </Box>
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
              width: '100%',
              justifyContent: 'center',
              flexDirection: 'column',
              alignSelf: 'stretch',
              flex: '1 1 0',
              gap: '2.5rem',
              borderRadius: 8,
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
              overflow: 'hidden',
            }}
          >
            <Box
              sx={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '0.2rem',
                width: '100%',
                height: '80%',
                marginLeft: '2.5rem',
              }}
            >
              <Bar
                height="50%"
                width="180%"
                data={{
                  labels: [
                    'Red',
                    'Blue',
                    'Yellow',
                    'Green',
                    'Purple',
                    'Orange',
                  ],
                  datasets: [
                    {
                      label: '# of Votes',
                      data: [200, 300, 400, 500, 600, 700],
                      backgroundColor: 'rgba(105, 75, 219, 1)', // Cambia los valores RGB según tus necesidades
                    },
                    {
                      label: 'Quantity',
                      data: [120, 190, 300, 500, 200, 300],
                      backgroundColor: 'rgba(255, 119, 119, 1)', // Cambia los valores RGB según tus necesidades
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
            <Box>
              <div
                style={{
                  marginLeft: '-10rem',
                  display: 'flex',
                  fontSize: '0.7rem',
                  fontWeight: 'bold',
                }}
              >
                Postes Status
              </div>
              <div
                style={{
                  marginLeft: '-10rem',
                  display: 'flex',
                  fontSize: '0.7rem',
                }}
              >
                Now
              </div>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '60%',
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
                  fontSize: '0.5em',
                }}
              >
                <div
                  style={{
                    marginLeft: '-60px',
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
                    marginLeft: '5px',
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
                    marginLeft: '-40px',
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
                    marginLeft: '5px',
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
                    marginLeft: '-85px',
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
                    marginLeft: '5px',
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
