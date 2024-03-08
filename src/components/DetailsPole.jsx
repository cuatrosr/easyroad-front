import io from 'socket.io-client';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { useActionClose } from './ActionPoleModal';

export default function DetailsPole() {
  const { poleSerial } = useParams();
  const { handleCloseSocket } = useActionClose();
  const socket = io('http://57.151.39.186:3600', {
    reconnection: false,
  });
  const [heartbeat, setHeartbeat] = useState();
  useEffect(() => {
    handleCloseSocket(socket);
    // Listen for incoming messages
    socket.on(`${poleSerial}`, (newHeartbeat) => {
      console.log(newHeartbeat);
      setHeartbeat(newHeartbeat);
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
                Detalle del Poste
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
      </Box>
    </Box>
  );
}
