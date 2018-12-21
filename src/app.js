const express = require('express');
const app = express();

app.use(require('./routes/healthcheck'));

app.listen(process.env.PORT, () => {
  console.log(`Server be jammin' on ${process.env.PORT}!`);
});
