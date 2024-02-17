import { Bar, Pie } from 'react-chartjs-2';
import { CategoryScale, LinearScale, BarElement, Chart } from 'chart.js';
import { Box, styled } from '@mui/material';
Chart.register(CategoryScale, LinearScale, BarElement);

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
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
          justifyContent: 'center',
          alignItems: 'center',
          height: '90%',
          mt: '1.25rem',
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
          >
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
              flex: '0.6',
              gap: '2.5 rem',
              borderRadius: 8,
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', 
              overflow: 'hidden', 
            }}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
