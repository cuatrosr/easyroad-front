import Logo from '../assets/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { saveCurrentPole } from '../redux/slices/toolsBarSlice';
import { Box, Toolbar, Avatar, AppBar, Button } from '@mui/material';

export default function PoleBar() {
  const dispatch = useDispatch();
  const current = useSelector((state) => state.poleModal.value);
  const handleList = () => {
    dispatch(saveCurrentPole('list'));
  };
  const handleAdd = () => {
    dispatch(saveCurrentPole('add'));
  };
  return (
    <AppBar position="fixed" color="inherit">
      <Toolbar>
        {current === 'list' ? (
          <Button
            onClick={handleList}
            sx={{ my: 2, color: '#7F57F1', display: 'block' }}
          >
            Listar
          </Button>
        ) : (
          <Button
            onClick={handleList}
            sx={{ my: 2, color: 'black', display: 'block' }}
          >
            Listar
          </Button>
        )}
        {current === 'add' ? (
          <Button
            onClick={handleAdd}
            sx={{ my: 2, color: '#7F57F1', display: 'block' }}
          >
            Añadir
          </Button>
        ) : (
          <Button
            onClick={handleAdd}
            sx={{ my: 2, color: 'black', display: 'block' }}
          >
            Añadir
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
