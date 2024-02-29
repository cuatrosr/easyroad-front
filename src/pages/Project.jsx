import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PoleCard, PoleModal, PrimaryCard } from '../components';
import { axiosI, baseURL } from '../configs/axiosConfig';
import { saveCurrentPole } from '../redux/slices/toolsBarSlice';
import {
  Box,
  Grid,
  Avatar,
  Button,
  styled,
  Skeleton,
  Typography,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

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
    field: 'id',
    headerName: 'ID',
    width: 70,
  },
  {
    field: 'firstName',
    headerName: 'First name',
    minWidth: 130,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    minWidth: 130,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    minWidth: 90,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 18 },
  { id: 6, lastName: 'Melisandre', firstName: 'null', age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

function Project() {
  const dispatch = useDispatch();
  const [openPoleModal, setOpenPoleModal] = useState(false);
  const { projectId } = useParams();
  const [project, setProject] = useState();
  const [poles, setPoles] = useState([]);
  const getInfo = async () => {
    try {
      const project = await axiosI.get(`/projects/${projectId}`);
      setProject(project.data);
      const poles = await axiosI.get(`/poles/project/${projectId}`);
      setPoles(poles.data);
    } catch (e) {
      console.log(e);
    }
  };
  const renderPoles = () => {
    return poles.map((pole) => {
      return (
        <Grid item xs={5} sm={4} md={3} lg={2} key={pole._id}>
          <PrimaryCard serial={pole.serial} />
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
  };
  const handleOpen = () => {
    dispatch(saveCurrentPole('list'));
    setOpenPoleModal(true);
  };
  useEffect(() => {
    getInfo();
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
                  src={`${baseURL}/public/${project.image}`}
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
                <PoleCard title="Alert" number={poles.length} color="#D30033" />
                <PoleCard
                  title="Working"
                  number={poles.length}
                  color="#00D32F"
                />
                <PoleCard
                  title="Disconnected"
                  number={poles.length}
                  color="#9C9C9C"
                />
                <PoleCard
                  title="Alert Count"
                  number={poles.length}
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
                rows={rows}
                columns={columns}
                columnHeaderHeight={33}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 3 },
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
                loading={rows.length === 0}
                rowHeight={33}
                pageSizeOptions={[3]}
                disableRowSelectionOnClick
                {...rows}
              />
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default Project;
