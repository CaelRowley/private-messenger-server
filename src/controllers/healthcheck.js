const healthcheck = (req, res) => {
  res.send('Health check!');
};

module.exports = {
  "healthcheck": healthcheck
};
