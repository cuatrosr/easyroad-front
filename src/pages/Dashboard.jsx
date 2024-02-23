import { Box, styled } from '@mui/material';
import Pole from '../assets/pole.svg?react';
import Alert from '../assets/alert.svg?react';
import Worker from '../assets/worker.svg?react';
import Project from '../assets/project.svg?react';
import { Chart, Title, Legend, Tooltip } from 'chart.js';
import { BarChart, DoughnutChart, LineChart, MediaCard } from '../components';

Chart.register(Tooltip, Title, Legend);

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

function Dashboard() {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      <Box
        sx={{
          display: 'flex',
          padding: '0 0.625rem',
          gap: '1.25rem',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          height: '80vh',
          width: '90vw',
          flexShrink: 0,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            height: '50%',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'stretch',
            gap: '1.25rem',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              height: '100%',
              width: '50%',
              padding: '0 0.625rem',
              backgroundColor: '#fff',
              justifyContent: 'center',
              alignSelf: 'stretch',
              borderRadius: 8,
              boxShadow: '0 0 0.625rem rgba(0, 0, 0, 0.5)',
            }}
          >
            <LineChart />
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              height: '100%',
              width: '50%',
              backgroundColor: 'rgba(0, 0, 0, 0)',
              justifyContent: 'center',
              alignSelf: 'stretch',
              overflow: 'auto',
            }}
          >
            <Box
              sx={{
                backgroundColor: 'rgba(0, 0, 0, 0)',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gridTemplateRows: '1fr 1fr',
                gap: '0.5rem',
                height: '100%',
                width: '100%',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  alignSelf: 'stretch',
                  justifyContent: 'center',
                }}
              >
                <MediaCard
                  title="Postes SOS"
                  textBelow="22"
                  icon={Pole}
                  backgroundColor="rgb(79, 151, 191)"
                />
              </Box>
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  alignSelf: 'stretch',
                  justifyContent: 'center',
                }}
              >
                <MediaCard
                  title="Proyetos"
                  textBelow="2"
                  icon={Project}
                  backgroundColor="rgb(218, 114, 88)"
                />
              </Box>
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  alignSelf: 'stretch',
                  justifyContent: 'center',
                }}
              >
                <MediaCard
                  title="Operarios"
                  textBelow="6"
                  icon={Worker}
                  backgroundColor="rgb(218, 114, 88)"
                />
              </Box>
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  alignSelf: 'stretch',
                  justifyContent: 'center',
                }}
              >
                <MediaCard
                  title="Alertas"
                  textBelow="2"
                  icon={Alert}
                  backgroundColor="rgb(79, 151, 191)"
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            height: '50%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'stretch',
            gap: '1.25rem',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              width: '65%',
              height: '100%',
              padding: '0 0.625rem',
              backgroundColor: '#fff',
              justifyContent: 'center',
              alignSelf: 'stretch',
              borderRadius: 8,
              boxShadow: '0 0 0.625rem rgba(0, 0, 0, 0.5)',
            }}
          >
            <BarChart />
          </Box>
          <Box
            sx={{
              display: 'flex',
              width: '35%',
              height: '100%',
              padding: '0 0.625rem',
              backgroundColor: '#fff',
              justifyContent: 'center',
              alignSelf: 'stretch',
              borderRadius: 8,
              boxShadow: '0 0 0.625rem rgba(0, 0, 0, 0.5)',
            }}
          >
            <DoughnutChart />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
