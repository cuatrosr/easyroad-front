import { useEffect } from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useDispatch, useSelector } from 'react-redux';
import { styled, useTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ListItemButton from '@mui/material/ListItemButton';
import { useNavigate, useLocation } from 'react-router-dom';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import { saveCurrent, saveOpen } from '../redux/slices/toolsBarSlice';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const dispatch = useDispatch();
  const location = useLocation();
  const theme = useTheme();
  const open = useSelector((state) => state.toolsBar.value);
  const current = useSelector((state) => state.miniDrawer.value);
  const navigate = useNavigate();
  const handleDrawerClose = () => {
    dispatch(saveOpen(false));
  };
  const handleChange = (text) => {
    dispatch(saveCurrent(text));
  };
  useEffect(() => {
    if (
      location.pathname === '/' ||
      (location.pathname === '/projects' && current === undefined)
    ) {
      dispatch(saveCurrent('projects'));
    } else if (location.pathname === '/dashboard' && current === undefined) {
      dispatch(saveCurrent('dashboard'));
    }
    navigate(current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);
  return (
    <Drawer
      variant="permanent"
      open={open}
      PaperProps={{ sx: { backgroundColor: '#262A31', color: 'white' } }}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose} sx={{ color: 'white' }}>
          {theme.direction === 'rtl' ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider sx={{ backgroundColor: 'grey' }} />
      <List>
        {['Dashboard', 'Projects'].map((text, index) => (
          <ListItem key={text} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              onClick={() => handleChange(text.toLowerCase())}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              {current === text.toLowerCase() ? (
                <ListItemIcon
                  sx={{
                    color: '#7F57F1',
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <DashboardIcon /> : <AirportShuttleIcon />}
                </ListItemIcon>
              ) : (
                <ListItemIcon
                  sx={{
                    color: 'white',
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <DashboardIcon /> : <AirportShuttleIcon />}
                </ListItemIcon>
              )}
              <ListItemIcon
                sx={{
                  color: 'white',
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              ></ListItemIcon>
              <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
