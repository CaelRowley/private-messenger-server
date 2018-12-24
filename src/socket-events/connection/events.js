export default (socket) => {
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
};
