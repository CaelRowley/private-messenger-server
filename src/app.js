import express from "express";
import { healthcheckRouter } from "./routes/healthcheck";
const app = express();

app.use(healthcheckRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server be jammin' on ${process.env.PORT}!`);
});
