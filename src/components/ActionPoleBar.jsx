import Logo from '../assets/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Toolbar, Avatar, AppBar, Button } from '@mui/material';
import { saveCurrentActionPole } from '../redux/slices/toolsBarSlice';

export default function ActinPoleBar() {
  const dispatch = useDispatch();
  const current = useSelector((state) => state.actionPoleModal.value);
  const handleList = () => {
    dispatch(saveCurrentActionPole('details'));
  };
  const handleAdd = () => {
    dispatch(saveCurrentActionPole('actions'));
  };
  return (
    <AppBar position="fixed" color="inherit">
      <Toolbar>
        {current === 'details' ? (
          <Button
            onClick={handleList}
            sx={{ my: 2, color: '#7F57F1', display: 'block' }}
          >
            Detalles
          </Button>
        ) : (
          <Button
            onClick={handleList}
            sx={{ my: 2, color: 'black', display: 'block' }}
          >
            Detalles
          </Button>
        )}
        {current === 'actions' ? (
          <Button
            onClick={handleAdd}
            sx={{ my: 2, color: '#7F57F1', display: 'block' }}
          >
            Acciones
          </Button>
        ) : (
          <Button
            onClick={handleAdd}
            sx={{ my: 2, color: 'black', display: 'block' }}
          >
            Acciones
          </Button>
        )}
        <Box sx={{ flexGrow: 1 }} />
        <Avatar
          src={Logo}
          alt="Logo"
          sx={{
            width: '10vw',
            height: '5vh',
            borderRadius: 0,
            objectFit: 'cover',
          }}
        />
      </Toolbar>
    </AppBar>
  );
}
