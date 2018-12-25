import logger from '../../config/winston';

export const addConnectionEvents = (socket) => {
  socket.on('disconnect', () => {
    logger.debug('Client disconnected');
  });
};

export default {
  addConnectionEvents,
};
