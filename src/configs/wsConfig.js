import { io } from 'socket.io-client';

const socket = io(import.meta.env.VITE_URL_BACK_WS, {
  reconnection: true,
});

export default socket;
