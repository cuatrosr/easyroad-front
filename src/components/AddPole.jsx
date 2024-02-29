import Info from '../assets/info.svg?react';
import { Box, Typography, TextField, Button, styled, SvgIcon } from '@mui/material';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#AA5D4A'),
  backgroundColor: '#BC6650',
  '&:hover': {
    backgroundColor: '#AA5D4A',
  },
}));

export default function ListPole() {
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
                Lista de Postes
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
                name={'id'}
                label={'ID'}
                variant="outlined"
                fullWidth
                style={{ width: '100%' }}
                color={'secondary'}
                start
              />
              <TextField
                size="small"
                name={'serial'}
                label={'Serial'}
                variant="outlined"
                fullWidth
                style={{ width: '100%' }}
                color={'secondary'}
              />
            </Box>
            <ColorButton fullWidth variant="contained" disableElevation>
              Contained
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
            <SvgIcon sx={{ fontSize: '4rem' }} component={Info} inheritViewBox />
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
