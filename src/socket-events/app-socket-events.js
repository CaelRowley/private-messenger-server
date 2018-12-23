import { addDisconnectEvents } from './disconnect/events';
import { addMessageEvents } from './message/events';

const addSocketEvents = (io) => {
  io.on('connection', socket => {
    console.log('Client connected');
    addDisconnectEvents(socket);
    addMessageEvents(io, socket);
  });
};

export { addSocketEvents };
