import Swal from 'sweetalert2';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { axiosI } from '../configs/axiosConfig';
import SaveIcon from '@mui/icons-material/Save';
import PersonIcon from '@mui/icons-material/Person';
import { useSelector, useDispatch } from 'react-redux';
import { saveOpenProjectModal } from '../redux/slices/toolsBarSlice';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import {
  Box,
  Modal,
  Input,
  styled,
  Avatar,
  Button,
  Skeleton,
  Typography,
  InputLabel,
  FormControl,
  InputAdornment,
} from '@mui/material';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 545,
  bgcolor: 'background.paper',
  borderRadius: 8,
  border: '0.125rem solid #999',
  boxShadow: 24,
  p: 4,
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
};

export default function ProjectModal(props) {
  const open = useSelector((state) => state.projectModal.value);
  const [selectedImage, setSelectedImage] = useState(null);
  const [inputFile, setInputFile] = useState(null);
  const [inputName, setInputName] = useState(null);
  const [inputDescription, setInputDescription] = useState(null);
  const dispatch = useDispatch();
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      setInputFile(file);
      reader.readAsDataURL(file);
    }
  };
  const handleClose = () => {
    setInputName(null);
    setInputDescription(null);
    setSelectedImage(null);
    dispatch(saveOpenProjectModal(false));
    props.parentFunction();
  };
  const handleSubmit = () => {
    if (inputName && inputDescription && inputFile) {
      const formData = new FormData();
      formData.append('name', inputName);
      formData.append('description', inputDescription);
      formData.append('image', inputFile);
      axiosI.post('/projects', formData).then((response) => {
        if (response.status !== 201) {
          Swal.fire({
            title: 'Oops!',
            text: response.data.message || 'Algo salio mal!',
            icon: 'error',
          });
        } else {
          Swal.fire({
            title: 'Guardado!',
            text: 'Tu proyecto fue guardado.',
            icon: 'success',
          });
          handleClose();
        }
      });
    } else {
      Swal.fire({
        title: 'Oops!',
        text: 'Todos los campos son requeridos!',
        icon: 'error',
        timer: 2000,
      });
    }
  };
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: '0.625rem 0.938rem',
            alignItems: 'flex-start',
            alignSelf: 'stretch',
          }}
        >
          <Typography
            fontWeight="bold"
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Nuevo Proyecto
          </Typography>
          <Typography id="modal-modal-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </Typography>
        </Box>
        <Box
          sx={{
            padding: '0.625rem',
            display: 'flex',
            alignSelf: 'stretch',
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
        >
          <Box
            sx={{
              gap: '0.313rem',
              flex: '1 0 0',
              display: 'flex',
              alignItems: 'center',
              alignSelf: 'stretch',
              flexDirection: 'column',
              borderRight: '0.063rem solid #BEC4CC',
            }}
          >
            {selectedImage ? (
              <Avatar
                src={selectedImage}
                alt="Proyecto"
                sx={{
                  width: 178,
                  height: 140,
                  borderRadius: 0,
                  objectFit: 'cover',
                }}
              />
            ) : (
              <Skeleton variant="rectangular" height={140} width={178} />
            )}
            <Button
              component="label"
              variant="contained"
              color="error"
              sx={{ height: '1.625rem', width: '11.125rem' }}
              startIcon={<FileUploadOutlinedIcon />}
            >
              New Image
              <VisuallyHiddenInput
                accept="image/*"
                id="image-upload"
                type="file"
                onChange={handleImageChange}
              />
            </Button>
          </Box>
          <Box
            sx={{
              display: 'flex',
              padding: '0rem 1.875rem',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.625rem',
              flex: '1 0 0',
              alignSelf: 'stretch',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.313rem',
                alignSelf: 'stretch',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  alignSelf: 'stretch',
                }}
              >
                <Typography fontWeight="bold">Basic Info</Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Button
                  sx={{ height: '1.625rem' }}
                  variant="contained"
                  color="success"
                  size="small"
                  endIcon={<SaveIcon />}
                  onClick={handleSubmit}
                >
                  Save
                </Button>
              </Box>
            </Box>
            <Box sx={{ borderTop: '0.063rem solid #BEC4CC' }}>
              <FormControl
                variant="standard"
                style={{ marginLeft: '0.625rem', marginTop: '0.625rem' }}
              >
                <InputLabel htmlFor="input-with-icon-adornment">
                  Nombre
                </InputLabel>
                <Input
                  id="input-with-icon-adornment"
                  onChange={(e) => setInputName(e.target.value)}
                  startAdornment={
                    <InputAdornment position="start">
                      <PersonIcon />
                    </InputAdornment>
                  }
                />
              </FormControl>
              <FormControl
                variant="standard"
                style={{ marginLeft: '0.625rem', marginTop: '0.938rem' }}
              >
                <InputLabel htmlFor="input-with-icon-description">
                  Descripción
                </InputLabel>
                <Input
                  id="input-with-icon-description"
                  onChange={(e) => setInputDescription(e.target.value)}
                  startAdornment={
                    <InputAdornment position="start">
                      <PermContactCalendarIcon />
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}

ProjectModal.propTypes = {
  parentFunction: PropTypes.func,
};
