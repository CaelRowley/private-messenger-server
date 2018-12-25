import logger from '../../config/winston';

export const addMessageEvents = (io, socket) => {
  socket.on('emit message', (message) => {
    logger.debug(`Emitting message: "${message}" to all clients`);
    io.sockets.emit('emit message', message);
  });
};

export default {
  addMessageEvents,
};
