import { v4 as uuidv4 } from 'uuid';
import Ok from '../assets/ok.svg?react';
import socket from '../configs/wsConfig';
import { useState, useEffect } from 'react';
import Info from '../assets/info.svg?react';
import Pole from '../assets/pole.svg?react';
import { useParams } from 'react-router-dom';
import Alert from '../assets/alert.svg?react';
import { axiosI } from '../configs/axiosConfig';
import { useActionClose } from './ActionPoleModal';
import {
  Badge,
  Box,
  Button,
  Card,
  CardActionArea,
  Grid,
  SvgIcon,
  Typography,
} from '@mui/material';

export default function ActionsPole() {
  const { poleSerial } = useParams();
  const { handleCloseSocket } = useActionClose();
  const [pole, setPole] = useState();
  const handleSolicitud = async (text) => {
    socket.emit('solicitud', {
      uuid_solicitud: uuidv4(),
      tipo_solicitud: text,
      valor_solicitud: '1',
      serial_dispositivo: poleSerial,
    });
  };
  const handleResolve = async () => {
    const res = await axiosI.patch(`/poles/${pole._id}`, {
      state: 'ok',
    });
    setPole(res.data);
  };
  const getInfo = async () => {
    const pole = await axiosI.get(`/poles/serial/${poleSerial}`);
    setPole(pole.data);
  };
  useEffect(() => {
    getInfo();
    handleCloseSocket(socket);
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
            padding: '1.625rem 1.625rem',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.625rem',
            flex: '1 0 0',
            alignSelf: 'stretch',
          }}
        >
          <Card
            sx={{
              display: 'flex',
              width: '15rem',
              height: '10rem',
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
                {(pole && pole.state === 'disconnected' && (
                  <Badge badgeContent={''} color="error">
                    <SvgIcon
                      sx={{ fontSize: '6rem' }}
                      component={Pole}
                      inheritViewBox
                    />
                  </Badge>
                )) ||
                  (pole && pole.state === 'ok' && (
                    <Badge badgeContent={''} color="success">
                      <SvgIcon
                        sx={{ fontSize: '6rem' }}
                        component={Pole}
                        inheritViewBox
                      />
                    </Badge>
                  )) ||
                  (pole && pole.state === 'alert' && (
                    <Badge badgeContent={''} color="warning">
                      <SvgIcon
                        sx={{ fontSize: '6rem' }}
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
                  sx={{
                    color: '#262A31',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                  }}
                >
                  {poleSerial}
                </Typography>
              </Box>
            </CardActionArea>
          </Card>

          {pole && pole.state === 'disconnected' ? (
            <Grid
              container
              spacing={2}
              direction={'row'}
              alignItems={'stretch'}
              justifyContent={'center'}
            >
              <Grid item xs={12} sm={6} md={5} lg={4} key={1}>
                <Button
                  disabled
                  sx={{ height: '90%', width: '100%' }}
                  onClick={() => handleSolicitud('llamada_prueba')}
                  variant="contained"
                  size="small"
                  color="secondary"
                >
                  Llamada de Prueba
                </Button>
              </Grid>
              <Grid item xs={12} sm={6} md={5} lg={4} key={2}>
                <Button
                  disabled
                  sx={{ height: '90%', width: '100%' }}
                  onClick={() => handleSolicitud('reinicio_modem')}
                  variant="contained"
                  size="small"
                  color="secondary"
                >
                  Reinicio de Modem
                </Button>
              </Grid>
              <Grid item xs={12} sm={6} md={5} lg={4} key={3}>
                <Button
                  disabled
                  sx={{ height: '90%', width: '100%' }}
                  onClick={() => handleSolicitud('reinicio_dispositivo')}
                  variant="contained"
                  size="small"
                  color="secondary"
                >
                  Reinicio de Dispositivo
                </Button>
              </Grid>
              <Grid item xs={12} sm={6} md={5} lg={4} key={4}>
                <Button
                  disabled
                  sx={{ height: '90%', width: '100%' }}
                  onClick={() => handleSolicitud('peticion_imagen')}
                  variant="contained"
                  size="small"
                  color="secondary"
                >
                  Peticion de Imagen
                </Button>
              </Grid>
              <Grid item xs={12} sm={6} md={5} lg={4} key={5}>
                <Button
                  disabled
                  sx={{ height: '90%', width: '100%' }}
                  onClick={() => handleSolicitud('solicitud_info_modem')}
                  variant="contained"
                  size="small"
                  color="secondary"
                >
                  Solicitud Info del Modem
                </Button>
              </Grid>
              <Grid item xs={12} sm={6} md={5} lg={4} key={6}>
                <Button
                  disabled
                  sx={{ height: '90%', width: '100%' }}
                  onClick={() => handleSolicitud('actualizar')}
                  variant="contained"
                  size="small"
                  color="secondary"
                >
                  Actualizar Dispositivo
                </Button>
              </Grid>
            </Grid>
          ) : (
            <Grid
              container
              spacing={2}
              direction={'row'}
              alignItems={'stretch'}
              justifyContent={'center'}
            >
              <Grid item xs={12} sm={6} md={5} lg={4} key={1}>
                <Button
                  sx={{ height: '90%', width: '100%' }}
                  onClick={() => handleSolicitud('llamada_prueba')}
                  variant="contained"
                  size="small"
                  color="secondary"
                >
                  Llamada de Prueba
                </Button>
              </Grid>
              <Grid item xs={12} sm={6} md={5} lg={4} key={2}>
                <Button
                  sx={{ height: '90%', width: '100%' }}
                  onClick={() => handleSolicitud('reinicio_modem')}
                  variant="contained"
                  size="small"
                  color="secondary"
                >
                  Reinicio de Modem
                </Button>
              </Grid>
              <Grid item xs={12} sm={6} md={5} lg={4} key={3}>
                <Button
                  sx={{ height: '90%', width: '100%' }}
                  onClick={() => handleSolicitud('reinicio_dispositivo')}
                  variant="contained"
                  size="small"
                  color="secondary"
                >
                  Reinicio de Dispositivo
                </Button>
              </Grid>
              <Grid item xs={12} sm={6} md={5} lg={4} key={4}>
                <Button
                  sx={{ height: '90%', width: '100%' }}
                  onClick={() => handleSolicitud('peticion_imagen')}
                  variant="contained"
                  size="small"
                  color="secondary"
                >
                  Peticion de Imagen
                </Button>
              </Grid>
              <Grid item xs={12} sm={6} md={5} lg={4} key={5}>
                <Button
                  sx={{ height: '90%', width: '100%' }}
                  onClick={() => handleSolicitud('solicitud_info_modem')}
                  variant="contained"
                  size="small"
                  color="secondary"
                >
                  Solicitud Info del Modem
                </Button>
              </Grid>
              <Grid item xs={12} sm={6} md={5} lg={4} key={6}>
                <Button
                  sx={{ height: '90%', width: '100%' }}
                  onClick={() => handleSolicitud('actualizar')}
                  variant="contained"
                  size="small"
                  color="secondary"
                >
                  Actualizar Dispositivo
                </Button>
              </Grid>
            </Grid>
          )}
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
            {pole && pole.state === 'alert' ? (
              <>
                <SvgIcon
                  sx={{ fontSize: '4rem' }}
                  component={Alert}
                  inheritViewBox
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography
                    variant="h6"
                    component="h2"
                    sx={{ color: 'rgba(1, 0, 0, 0.70)', textAlign: 'center' }}
                  >
                    ¡El poste esta en alerta!
                  </Typography>
                  <Button onClick={handleResolve} color="warning">
                    Resolver
                  </Button>
                </Box>
              </>
            ) : pole && pole.state === 'ok' ? (
              <>
                <SvgIcon
                  sx={{ fontSize: '4rem' }}
                  component={Ok}
                  inheritViewBox
                />
                <Typography
                  variant="h6"
                  component="h2"
                  sx={{ color: 'rgba(1, 0, 0, 0.70)', textAlign: 'center' }}
                >
                  ¡El poste se encuentra bien!
                </Typography>
              </>
            ) : pole && pole.state === 'disconnected' ? (
              <>
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
                  ¡El poste esta desconectado!
                </Typography>
              </>
            ) : null}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
