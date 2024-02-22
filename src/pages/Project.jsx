import Badge from '@mui/material/Badge';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MailIcon from '@mui/icons-material/Mail';
import { axiosI, baseURL } from '../configs/axiosConfig';
import { Avatar, Box, Grid, Typography, styled } from '@mui/material';

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
  const getProject = async () => {
    try {
      const response = await axiosI.get(`/projects/${projectId}`);
      setProject(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getProject();
  });
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      {project && (
        <>
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
              <Typography paragraph>{project.description}</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              flex: '1 0 0',
              alignSelf: 'stretch',
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4} lg={3} key={project._id}>
                <Badge badgeContent={4} color="secondary">
                  <MailIcon color="action" />
                </Badge>
              </Grid>
            </Grid>
          </Box>
        </>
      )}
    </Box>
  );
}

export default Project;
