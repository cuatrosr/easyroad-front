import { useDispatch } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import { axiosI } from '../configs/axiosConfig';
import { useParams, useNavigate } from 'react-router-dom';
import {
  saveCurrentActionPole,
  saveCurrentPole,
} from '../redux/slices/toolsBarSlice';
import {
  PoleCard,
  PoleModal,
  PrimaryCard,
  ActionPoleModal,
} from '../components';
import {
  Box,
  Grid,
  Avatar,
  Button,
  styled,
  Skeleton,
  Typography,
} from '@mui/material';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const columns = [
  {
    field: 'fecha',
    headerName: 'Fecha',
    minWidth: 300,
  },
  {
    field: 'serial',
    headerName: 'Serial',
    minWidth: 300,
  },
  {
    field: 'tipo_evento',
    headerName: 'Tipo Evento',
    minWidth: 280,
  },
  {
    field: 'estado_evento',
    headerName: 'Estado Evento',
    minWidth: 280,
  },
];

function Project() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [poleSerial, setPoleSerial] = useState('');
  const [openPoleModal, setOpenPoleModal] = useState(false);
  const [openActionPoleModal, setOpenActionPoleModal] = useState(false);
  const { projectId } = useParams();
  const [project, setProject] = useState();
  const [poles, setPoles] = useState([]);
  const [events, setEvents] = useState([]);
  const getInfo = async () => {
    try {
      const project = await axiosI.get(`/projects/${projectId}`);
      setProject(project.data);
      const poles = await axiosI.get(`/poles/project/${projectId}`);
      setPoles(poles.data);
      let events = await axiosI.get('/events');
      events = events.data
        .filter(
          (event) =>
            poles.data.filter(
              (pole) => pole.serial === event.serial_dispositivo,
            ).length > 0,
        )
        .map((event) => {
          return {
            id: event._id,
            fecha: event.created,
            serial: event.serial_dispositivo,
            tipo_evento: event.tipo_evento,
            estado_evento: event.estado_evento,
          };
        });
      setEvents(events);
    } catch (e) {
      console.log(e);
    }
  };
  const renderPoles = () => {
    return poles.map((pole) => {
      return (
        <Grid item xs={5} sm={4} md={3} lg={2} key={pole._id}>
          <PrimaryCard
            handleOpen={handleActionOpen}
            serial={pole.serial}
            state={pole.state}
          />
        </Grid>
      );
    });
  };
  const renderSkeletons = () => {
    return [1, 2, 3, 4].map((skeleton) => (
      <Grid item xs={5} sm={4} md={3} lg={2} key={skeleton}>
        <Skeleton variant="rectangular" width={'9rem'} height={'9rem'} />
      </Grid>
    ));
  };
  const handleClose = () => {
    setOpenPoleModal(false);
    navigate(`/projects/${projectId}`);
  };
  const handleActionOpen = (serial) => {
    dispatch(saveCurrentActionPole('details'));
    setPoleSerial(serial);
    setOpenActionPoleModal(true);
  };
  const handleActionClose = () => {
    setOpenActionPoleModal(false);
    navigate(`/projects/${projectId}`);
  };
  const handleOpen = () => {
    dispatch(saveCurrentPole('list'));
    setOpenPoleModal(true);
  };
  useEffect(() => {
    setInterval(() => {
      getInfo();
    }, 5000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      <PoleModal
        open={openPoleModal}
        parentFunction={getInfo}
        handleClose={handleClose}
      />
      {poleSerial && (
        <ActionPoleModal
          serial={poleSerial}
          open={openActionPoleModal}
          handleClose={handleActionClose}
        />
      )}
      {project && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            width: '90vw',
            flexShrink: 0,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              padding: '0.625rem 1.563rem',
              flexDirection: 'column',
              alignItems: 'flex-start',
              alignSelf: 'stretch',
            }}
          >
            <Typography fontWeight="bold" variant="h6" component="div">
              {project.name}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'start',
                  gap: '1.25rem',
                  alignSelf: 'stretch',
                }}
              >
                <Avatar
                  src={`${project.image}`}
                  alt="Logo"
                  sx={{
                    width: '9.188rem',
                    height: '5.563rem',
                    borderRadius: 0,
                    objectFit: 'cover',
                  }}
                />
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'start',
                    justifyContent: 'center',
                    alignSelf: 'stretch',
                  }}
                >
                  <Typography paragraph>{project.description}</Typography>
                  <Button onClick={handleOpen} variant="outlined" size="small">
                    Gestionar Postes
                  </Button>
                </Box>
              </Box>
              <Box sx={{ flexGrow: 1 }} />
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'start',
                  gap: '1.25rem',
                  alignSelf: 'stretch',
                }}
              >
                <PoleCard
                  title="Alert"
                  number={poles.filter((pole) => pole.state === 'alert').length}
                  color="#D30033"
                />
                <PoleCard
                  title="Working"
                  number={poles.filter((pole) => pole.state === 'ok').length}
                  color="#00D32F"
                />
                <PoleCard
                  title="Disconnected"
                  number={
                    poles.filter((pole) => pole.state === 'disconnected').length
                  }
                  color="#9C9C9C"
                />
                <PoleCard
                  title="Alert Count"
                  number={poles.filter((pole) => pole.state === 'alert').length}
                  color="#D6B200"
                />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              padding: '0.625rem 1.563rem',
              flexDirection: 'column',
              alignItems: 'center',
              alignSelf: 'stretch',
            }}
          >
            <Grid container spacing={2}>
              {poles.length !== 0 ? renderPoles() : renderSkeletons()}
            </Grid>
          </Box>
          <Box
            sx={{
              display: 'flex',
              padding: '0.625rem 1.563rem',
              flexDirection: 'column',
              alignItems: 'center',
              alignSelf: 'stretch',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                alignSelf: 'stretch',
                height: '100%',
                width: '100%',
                '& .super-app-theme--header': {
                  backgroundColor: 'rgba(255, 7, 0, 0.55)',
                },
              }}
            >
              <DataGrid
                rows={events}
                columns={columns}
                columnHeaderHeight={33}
                initialState={{
                  sorting: { sortModel: [{ field: 'fecha', sort: 'desc' }] },
                  pagination: {
                    paginationModel: { page: 0, pageSize: 6 },
                  },
                }}
                sx={{
                  '& .MuiDataGrid-columnHeaders': {
                    borderRadius: 'var(--none, 0px)',
                    borderBottom:
                      '0.063rem solid var(--divider, rgba(0, 0, 0, 0.12))',
                    borderLeft:
                      'var(--none, 0rem) solid var(--divider, rgba(255, 255, 255, 1))',
                    borderRight:
                      'var(--none, 0rem) solid var(--divider, rgba(255, 255, 255, 1))',
                    borderTop:
                      'var(--none, 0rem) solid var(--divider, rgba(255, 255, 255, 1))',
                    background:
                      'var(--primary-selected, rgba(170, 93, 74, 0.9))',
                    color: 'var(--on-primary, rgba(255, 255, 255, 1))',
                    alignItems: 'space-between !important',
                  },
                  '& .MuiDataGrid-sortIcon': {
                    opacity: 'inherit !important',
                    color: 'var(--on-primary, rgba(255, 255, 255, 1))',
                  },
                }}
                loading={events.length === 0}
                rowHeight={33}
                pageSizeOptions={[6, 12]}
                disableRowSelectionOnClick
                {...events}
              />
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default Project;
