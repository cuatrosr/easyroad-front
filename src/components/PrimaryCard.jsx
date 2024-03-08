import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import Pole from '../assets/pole.svg?react';
import Typography from '@mui/material/Typography';
import { Badge, Box, CardActionArea, SvgIcon } from '@mui/material';

export default function PrimaryCard(props) {
  const { state, serial, handleOpen } = props;
  const handleCardClick = () => {
    handleOpen(serial);
  };
  return (
    <Card
      sx={{
        display: 'flex',
        width: '9rem',
        height: '9rem',
        boxShadow: 'none',
      }}
    >
      <CardActionArea onClick={handleCardClick}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '1rem',
            alignSelf: 'stretch',
          }}
        >
          {(state === 'disconnected' && (
            <Badge badgeContent={''} color="error">
              <SvgIcon
                sx={{ fontSize: '5rem' }}
                component={Pole}
                inheritViewBox
              />
            </Badge>
          )) ||
            (state === 'ok' && (
              <Badge badgeContent={''} color="success">
                <SvgIcon
                  sx={{ fontSize: '5rem' }}
                  component={Pole}
                  inheritViewBox
                />
              </Badge>
            )) ||
            (state === 'alert' && (
              <Badge badgeContent={''} color="warning">
                <SvgIcon
                  sx={{ fontSize: '5rem' }}
                  component={Pole}
                  inheritViewBox
                />
              </Badge>
            ))}
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography
            gutterBottom
            variant="body2"
            sx={{ color: '#262A31', fontSize: '1rem', fontWeight: 'bold' }}
          >
            {serial}
          </Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
}

PrimaryCard.propTypes = {
  handleOpen: PropTypes.func,
  serial: PropTypes.string,
  state: PropTypes.string,
};
