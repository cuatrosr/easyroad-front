import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import Info from '../assets/info.svg?react';
import { useParams } from 'react-router-dom';
import { axiosI } from '../configs/axiosConfig';
import {
  Box,
  Button,
  styled,
  SvgIcon,
  TextField,
  Typography,
} from '@mui/material';
import { useClose } from './PoleModal';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#AA5D4A'),
  backgroundColor: '#BC6650',
  '&:hover': {
    backgroundColor: '#AA5D4A',
  },
}));

export default function AddPole() {
  const { handleCloseModal } = useClose();
  const { projectId } = useParams();
  const [project, setProject] = useState();
  const [formData, setFormData] = useState({
    serial: '',
    fabricante: '',
    modelo: '',
  });
  const getInfo = async () => {
    try {
      const project = await axiosI.get(`/projects/${projectId}`);
      setProject(project.data);
    } catch (e) {
      console.log(e);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const createPole = async () => {
    if (
      formData.serial === '' ||
      formData.fabricante === '' ||
      formData.modelo === ''
    ) {
      Swal.fire({
        title: 'Oops!',
        text: 'Debes llenar todos los campos!',
        icon: 'error',
      });
    } else {
      axiosI
        .post('/poles', { ...formData, project: projectId })
        .then((response) => {
          if (response.status !== 201) {
            Swal.fire({
              title: 'Oops!',
              text: response.data.message || 'Algo salio mal!',
              icon: 'error',
            });
          } else {
            Swal.fire({
              title: 'Guardado!',
              text: 'El poste fue guardado.',
              icon: 'success',
            });
          }
        });
      setFormData({
        serial: '',
        fabricante: '',
        modelo: '',
      });
      handleCloseModal();
    }
  };
  useEffect(() => {
    getInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Box component={'div'}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            padding: '0.625rem',
            flexDirection: 'column',
            alignItems: 'flex-start',
            alignSelf: 'stretch',
            flex: '1 1 0',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              padding: '0.625rem 0.938rem',
              flexDirection: 'column',
              alignItems: 'flex-start',
              alignSelf: 'stretch',
              gap: '0.313rem',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <Typography
                fontWeight="bold"
                id="modal-modal-title"
                variant="h6"
                component="h2"
              >
                Nuevo Poste
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                alignSelf: 'stretch',
                gap: '0.625rem',
              }}
            >
              <Typography
                fontWeight="bold"
                id="modal-modal-title"
                variant="body2"
                component="p"
              >
                {project && project.name}
              </Typography>
            </Box>
            <Typography
              sx={{ textAlign: 'justify' }}
              id="modal-modal-description"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            padding: '0.625rem',
            flexDirection: 'column',
            alignItems: 'center',
            alignSelf: 'stretch',
          }}
        >
          <Box
            sx={{
              width: '70%',
              display: 'flex',
              padding: '0.938rem',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              gap: '0.313rem',
              borderRadius: '0.313rem',
              border: '0.063rem solid #BEC4CC',
              boxShadow: '0 0 0.625rem rgba(0, 0, 0, 0.2)',
            }}
          >
            <Box
              component="form"
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-start',
                gap: '0.313rem',
                alignSelf: 'stretch',
                '& > :not(style)': { width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                size="small"
                name={'serial'}
                label={'Serial'}
                variant="outlined"
                fullWidth
                style={{ width: '100%' }}
                onChange={handleChange}
                color={'secondary'}
              />
              <TextField
                size="small"
                name={'fabricante'}
                label={'Fabricante'}
                variant="outlined"
                fullWidth
                style={{ width: '100%' }}
                onChange={handleChange}
                color={'secondary'}
              />
              <TextField
                size="small"
                name={'modelo'}
                label={'Modelo'}
                variant="outlined"
                fullWidth
                style={{ width: '100%' }}
                onChange={handleChange}
                color={'secondary'}
              />
            </Box>
            <ColorButton
              onClick={createPole}
              fullWidth
              variant="contained"
              disableElevation
            >
              Register
            </ColorButton>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            padding: '0rem 1.25rem',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'stretch',
            flex: '1 0 0',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              padding: '0.625rem',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '0.625rem',
              width: '70%',
              borderRadius: '0.5rem',
              background: 'rgba(156, 207, 243, 0.7)',
            }}
          >
            <SvgIcon
              sx={{ fontSize: '4rem' }}
              component={Info}
              inheritViewBox
            />
            <Typography
              variant="h6"
              component="h2"
              sx={{ color: 'rgba(1, 0, 0, 0.70)', textAlign: 'center' }}
            >
              ¡El poste se debe configurar para contectarse!
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
