import Ok from '../assets/ok.svg?react';
import socket from '../configs/wsConfig';
import { useState, useEffect } from 'react';
import Info from '../assets/info.svg?react';
import { useParams } from 'react-router-dom';
import Alert from '../assets/alert.svg?react';
import { axiosI } from '../configs/axiosConfig';
import { useActionClose } from './ActionPoleModal';
import { Box, Button, SvgIcon, Typography } from '@mui/material';

export default function DetailsPole() {
  const { poleSerial } = useParams();
  const { handleCloseSocket } = useActionClose();
  const [heartbeat, setHeartbeat] = useState();
  const [pole, setPole] = useState();
  const handleResolve = async () => {
    const res = await axiosI.patch(`/poles/${pole._id}`, {
      state: 'ok',
    });
    setPole(res.data);
  };
  const getInfo = async () => {
    const pole = await axiosI.get(`/poles/serial/${poleSerial}`);
    setPole(pole.data);
    const heartbeat = await axiosI.get(`/heartbeat/${poleSerial}`);
    setHeartbeat(heartbeat.data);
  };
  useEffect(() => {
    getInfo();
    handleCloseSocket(socket);
    socket.emit('serial', `${poleSerial}`);
    // Listen for incoming messages
    socket.on(`${poleSerial}`, async (newHeartbeat) => {
      setHeartbeat({ ...newHeartbeat });
      const pole = await axiosI.get(`/poles/serial/${poleSerial}`);
      setPole(pole.data);
    });
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
              padding: '0.313rem 0.625rem',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'flex-start',
              alignSelf: 'stretch',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                alignSelf: 'stretch',
                flex: '1 0 0',
                borderRight: '1px solid #BEC4CC',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  padding: '0px 20px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'stretch',
                  borderBottom: '1px solid #BEC4CC',
                }}
              >
                <Typography
                  fontWeight="bold"
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                >
                  Basic Info
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  padding: '10px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'stretch',
                }}
              >
                <Typography
                  id="modal-modal-title"
                  variant="body1"
                  component="h2"
                >
                  <strong>Serial:</strong> {poleSerial}
                  <br />
                  <strong>Fabricante:</strong> {pole && pole.fabricante}
                  <br />
                  <strong>Modelo:</strong> {pole && pole.modelo}
                  <br />
                  <strong>Estado:</strong> {pole && pole.state}
                  <br />
                  <strong>imei:</strong> {heartbeat && heartbeat.contenido.imei}
                  <br />
                  <strong>SIM Numero:</strong>{' '}
                  {heartbeat && heartbeat.contenido.numero_sim}
                  <br />
                  <strong>Operador:</strong>{' '}
                  {heartbeat && heartbeat.contenido.operador}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                alignSelf: 'stretch',
                flex: '1 0 0',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  padding: '0px 20px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'stretch',
                  borderBottom: '1px solid #BEC4CC',
                }}
              >
                <Typography
                  fontWeight="bold"
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                >
                  Advance Info
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  padding: '10px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'stretch',
                }}
              >
                <Typography
                  id="modal-modal-title"
                  variant="body1"
                  component="h2"
                >
                  <strong>Voltaje Bateria:</strong>{' '}
                  {heartbeat && heartbeat.contenido.voltaje_bateria}
                  <br />
                  <strong>Voltaje Panel:</strong>{' '}
                  {heartbeat && heartbeat.contenido.voltaje_panel}
                  <br />
                  <strong>Porcentaje Bateria:</strong>{' '}
                  {heartbeat && heartbeat.contenido.porcentaje_bateria + '%'}
                  <br />
                  <strong>Estado Registro:</strong>{' '}
                  {heartbeat && heartbeat.contenido.estado_registro}
                  <br />
                  <strong>Nivel Señal:</strong>{' '}
                  {heartbeat && heartbeat.contenido.nivel_senal}
                  <br />
                  <strong>Tipo Tecnologia Red Movil:</strong>{' '}
                  {heartbeat && heartbeat.contenido.tipo_tecnologia_red_movil}
                </Typography>
              </Box>
            </Box>
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
