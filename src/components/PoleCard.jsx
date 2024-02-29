import PropTypes from 'prop-types';
import { Box, Card } from '@mui/material';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

export default function PoleCard({ title, number, color }) {
  return (
    <Card
      style={{
        display: 'flex',
        width: '12vw',
        height: '14.6vh',
        borderRadius: '0.5rem',
        backgroundColor: '#BDD3EB',
      }}
    >
      <CardContent
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '0.5rem',
        }}
      >
        <Typography
          variant="h7"
          style={{ color: 'rgba(105, 105, 105, 1)', fontWeight: 'bold' }}
        >
          {title}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: '2rem',
          }}
        >
          <Box
            sx={{
              width: '0.25rem',
              height: '1.5rem',
              borderRadius: '0.063rem',
              bgcolor: '#369FFF',
            }}
          />
          <Typography variant="h5" style={{ color: color, fontWeight: 'bold' }}>
            {number}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

PoleCard.propTypes = {
  title: PropTypes.string,
  number: PropTypes.number,
  color: PropTypes.string,
};
