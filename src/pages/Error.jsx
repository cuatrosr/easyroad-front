import { NotFound } from '../components';
import { Grid } from '@mui/material';

const error = () => {
  return (
    <Grid
      container
      display="flex"
      direction="column"
      minHeight="100vh"
      alignItems="center"
      alignContent="center"
      justifyContent="center"
    >
      <NotFound />
    </Grid>
  );
};

export default error;
