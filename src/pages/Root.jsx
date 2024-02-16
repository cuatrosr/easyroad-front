import { Outlet } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import { MiniDrawer, NavBar } from '../components';

function Root() {
  return (
    <Box sx={{ display: 'flex', height: '100vh', width: '100vw' }}>
      <CssBaseline />
      <NavBar />
      <MiniDrawer />
      <Outlet />
    </Box>
  );
}

export default Root;
