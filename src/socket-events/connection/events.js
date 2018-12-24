export const addConnectionEvents = (socket) => {
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
};

export default {
  addConnectionEvents,
};
