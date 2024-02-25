import { useState, useEffect } from 'react';
import { PrimaryCard } from '../components';
import { useParams } from 'react-router-dom';
import { axiosI, baseURL } from '../configs/axiosConfig';
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

function Project() {
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
  useEffect(() => {
    getInfo();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
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
              padding: '0.625rem 1.563rem',
              flexDirection: 'column',
              alignItems: 'flex-start',
              alignSelf: 'stretch',
            }}
          >
            <Typography fontWeight="bold" variant="h6" component="div">
              {project.name}
            </Typography>
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
                <Button variant="outlined" size="small">
                  Gestionar Postes
                </Button>
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
        </Box>
      )}
    </Box>
  );
}

export default Project;
