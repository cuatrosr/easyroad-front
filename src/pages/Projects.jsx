import { useState, useEffect } from 'react';
import { axiosI } from '../configs/axiosConfig';
import { ActionCard, ProjectModal } from '../components';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import {
  Box,
  Grid,
  styled,
  Skeleton,
  Typography,
  IconButton,
} from '@mui/material';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

function Projects() {
  const [openProjectModal, setOpenProjectModal] = useState(false);
  const [projects, setProjects] = useState([]);
  const getProjects = async () => {
    try {
      const response = await axiosI.get('/projects');
      setProjects(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  const renderProjects = () => {
    return projects.map((project) => {
      return (
        <Grid item xs={12} sm={6} md={4} lg={3} key={project._id}>
          <ActionCard
            id={project._id}
            img={project.image}
            name={project.name}
            description={project.description}
            parentFunction={getProjects}
          />
        </Grid>
      );
    });
  };
  const renderSkeletons = () => {
    return [1, 2, 3, 4].map((skeleton) => (
      <Grid item xs={12} sm={6} md={4} lg={3} key={skeleton}>
        <Skeleton
          variant="rectangular"
          maxwidth={'17.5rem'}
          height={'13.75rem'}
        />
      </Grid>
    ));
  };
  const handleClose = () => {
    setOpenProjectModal(false);
  };
  const handleOpen = () => {
    setOpenProjectModal(true);
  };
  useEffect(() => {
    getProjects();
  }, []);
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      <ProjectModal
        open={openProjectModal}
        handleClose={handleClose}
        parentFunction={getProjects}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          alignSelf: 'stretch',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'stretch',
          }}
        >
          <Typography fontWeight="bold" variant="h6" component="h1">
            Proyectos
          </Typography>
          <IconButton onClick={handleOpen} aria-label="share">
            <AddCircleOutlineOutlinedIcon />
          </IconButton>
        </Box>
        <Typography paragraph textAlign={'justify'}>
          En este contexto, le invitamos a explorar el mundo de la creación de
          proyectos personalizados, donde cada concesión representa una
          oportunidad única para administrar eficientemente la infraestructura
          de postes en su jurisdicción. Le damos la más cordial bienvenida al
          mundo de la gestión de concesiones de infraestructura, donde sus
          proyectos cobran vida con un propósito claro y definido.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {projects.length !== 0 ? renderProjects() : renderSkeletons()}
      </Grid>
    </Box>
  );
}

export default Projects;
