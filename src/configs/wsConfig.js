import { io } from 'socket.io-client';

const socket = io('http://57.151.39.186:3600', {
  reconnection: true,
});

export default socket;
