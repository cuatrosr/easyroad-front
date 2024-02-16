import { useDispatch } from 'react-redux';
import { ActionCard } from '../components';
import { useState, useEffect } from 'react';
import { axiosI } from '../configs/axiosConfig';
import ProjectModal from '../components/ProjectModal';
import { saveOpenProjectModal } from '../redux/slices/toolsBarSlice';
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
  const dispatch = useDispatch();
  dispatch(saveOpenProjectModal(false));
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
        <Skeleton variant="rectangular" maxwidth={'17.5rem'} height={'13.75rem'} />
      </Grid>
    ));
  };
  const handleOpen = () => {
    dispatch(saveOpenProjectModal(true));
  };
  useEffect(() => {
    getProjects();
  }, []);
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      <ProjectModal parentFunction={getProjects} />
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
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {projects.length !== 0 ? renderProjects() : renderSkeletons()}
      </Grid>
    </Box>
  );
}

export default Projects;
