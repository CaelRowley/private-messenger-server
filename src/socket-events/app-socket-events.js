import { addDisconnectEvents } from './connection/events';
import { addMessageEvents } from './messages/events';

const addSocketEvents = (io) => {
  io.on('connection', socket => {
    console.log('Client connected');
    addDisconnectEvents(socket);
    addMessageEvents(io, socket);
  });
};

export { addSocketEvents };
