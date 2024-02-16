import { Box, Grid, Typography } from '@mui/material';

function NotFound() {
  return (
    <>
      <Grid
        container
        maxWidth="sm"
        display="flex"
        direction="column"
        justifyContent="center"
        textAlign="center"
      >
        <Typography
          variant="h6"
          component="h2"
          color="#000"
          textTransform="uppercase"
          sx={{
            m: 0,
            fontSize: '1.25rem',
            fontWeight: '400',
          }}
        >
          Oops! Page not found
        </Typography>
        <Box sx={{ position: 'relative' }}>
          <Typography
            variant="h1"
            component="h3"
            ml="-1.25rem"
            sx={{ color: '#262626' }}
          >
            <Typography
              display="inline"
              component="span"
              letterSpacing="-2.8rem"
              sx={{
                m: '0',
                lineHeight: '1',
                fontSize: '15rem',
                fontWeight: '900',
                textShadow: '-0.5rem 0rem 0rem #fff',
              }}
            >
              4
            </Typography>
            <Typography
              component="span"
              letterSpacing="-2.8rem"
              sx={{
                m: '0',
                lineHeight: '1',
                fontSize: '15rem',
                fontWeight: '900',
                textShadow: '-0.5rem 0rem 0rem #fff',
              }}
            >
              0
            </Typography>
            <Typography
              component="span"
              letterSpacing="-2.8rem"
              sx={{
                m: '0',
                lineHeight: '1',
                fontSize: '15rem',
                fontWeight: '900',
                textShadow: '-0.5rem 0rem 0rem #fff',
              }}
            >
              4
            </Typography>
          </Typography>
        </Box>
      </Grid>
      <Grid container maxWidth="sm" direction="column" textAlign="center">
        <Typography
          variant="h5"
          component="h2"
          color="#000"
          textTransform="uppercase"
          sx={{
            m: 0,
            fontSize: '1.25rem',
            fontWeight: '400',
          }}
        >
          We are sorry, but the page you requested was not found
        </Typography>
      </Grid>
    </>
  );
}

export default NotFound;
