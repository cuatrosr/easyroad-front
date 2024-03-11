import { io } from 'socket.io-client';

const socket = io('http://localhost:3600', {
  reconnection: true,
});

export default socket;
