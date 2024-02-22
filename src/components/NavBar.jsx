import Logo from '../assets/logo.png';
import MuiAppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector, useDispatch } from 'react-redux';
import { saveOpen } from '../redux/slices/toolsBarSlice';
import { Box, Toolbar, IconButton, Avatar } from '@mui/material';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function NavBar() {
  const open = useSelector((state) => state.toolsBar.value);
  const dispatch = useDispatch();
  const handleDrawerOpen = () => {
    dispatch(saveOpen(true));
  };
  return (
    <AppBar position="fixed" open={open} color="inherit">
      <Toolbar>
        <IconButton
          color="default"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <Avatar
          src={Logo}
          alt="Logo"
          sx={{ width: '20vw', height: '5vh', borderRadius: 0, objectFit: 'cover' }}
        />
      </Toolbar>
    </AppBar>
  );
}
