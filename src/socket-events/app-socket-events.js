import addConnectionEvents from './connection/events';
import addMessageEvents from './messages/events';

export default (io) => {
  io.on('connection', (socket) => {
    console.log('Client connected');
    addConnectionEvents(socket);
    addMessageEvents(io, socket);
  });
};
