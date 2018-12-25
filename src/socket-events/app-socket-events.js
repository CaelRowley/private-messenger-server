import logger from '../config/winston';
import { addConnectionEvents } from './connection/events';
import { addMessageEvents } from './messages/events';

export const addSocketEvents = (io) => {
  io.on('connection', (socket) => {
    logger.debug('Client connected');
    addConnectionEvents(socket);
    addMessageEvents(io, socket);
  });
};

export default {
  addSocketEvents,
};
