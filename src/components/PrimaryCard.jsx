import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import Pole from '../assets/pole.svg?react';
import Typography from '@mui/material/Typography';
import { Badge, Box, CardActionArea, SvgIcon } from '@mui/material';

export default function PrimaryCard(props) {
  return (
    <Card
      sx={{
        display: 'flex',
        width: '9rem',
        height: '9rem',
        boxShadow: 'none',
      }}
    >
      <CardActionArea>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '1rem',
            alignSelf: 'stretch',
          }}
        >
          {(props.state === 'disconnected' && (
            <Badge badgeContent={''} color="error">
              <SvgIcon
                sx={{ fontSize: '5rem' }}
                component={Pole}
                inheritViewBox
              />
            </Badge>
          )) ||
            (props.state === 'ok' && (
              <Badge badgeContent={''} color="success">
                <SvgIcon
                  sx={{ fontSize: '5rem' }}
                  component={Pole}
                  inheritViewBox
                />
              </Badge>
            )) ||
            (props.state === 'alert' && (
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
            {props.serial}
          </Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
}

PrimaryCard.propTypes = {
  serial: PropTypes.string,
  state: PropTypes.string,
};
