import Swal from 'sweetalert2';
import PropTypes from 'prop-types';
import { axiosI } from '../configs/axiosConfig';
import { baseURL } from '../configs/axiosConfig';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Card,
  Button,
  CardMedia,
  IconButton,
  Typography,
  CardContent,
  CardActions,
  CardActionArea,
} from '@mui/material';

export default function ActionCard(props) {
  const handleClick = () => {
    Swal.fire({
      title: '¿Estas seguro?',
      text: 'No podras revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminalo!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await axiosI.delete(`/projects/${props.id}`);
        if (response.status !== 200) {
          Swal.fire({
            title: 'Oops!',
            text: response.data.message || 'Algo salio mal!',
            icon: 'error',
          });
        } else {
          Swal.fire({
            title: 'Eliminado!',
            text: 'Tu proyecto fue eliminado.',
            icon: 'success',
          });
          props.parentFunction();
        }
      }
    });
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src={`${baseURL}/public/${props.img}`}
          sx={{ objectFit: 'fill' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <Button size="small">Edit</Button>
        <IconButton onClick={handleClick} aria-label="share">
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

ActionCard.propTypes = {
  id: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  parentFunction: PropTypes.func,
};
