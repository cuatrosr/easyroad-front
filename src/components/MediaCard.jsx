import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import { Box, SvgIcon } from '@mui/material';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

export default function MediaCard({ title, icon, textBelow, backgroundColor }) {
  return (
    <Card
      style={{
        display: 'flex',
        width: '19vw',
        height: '18.2vh',
        backgroundColor,
      }}
    >
      <CardContent>
        <Typography variant="h6" style={{ color: 'white' }}>
          {title}
        </Typography>
        <Typography
          variant="body1"
          style={{ color: 'white', fontSize: '1.875rem', fontWeight: 'bold' }}
        >
          {textBelow}
        </Typography>
      </CardContent>
      <Box sx={{ flexGrow: 1 }} />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0.5rem',
          alignSelf: 'stretch',
        }}
      >
        <SvgIcon sx={{ fontSize: '4rem' }} component={icon} inheritViewBox />
      </Box>
    </Card>
  );
}

MediaCard.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.component,
  textBelow: PropTypes.string,
  backgroundColor: PropTypes.string,
};
