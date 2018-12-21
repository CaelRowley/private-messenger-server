import express from "express";
import { healthcheckRouter } from "./routes/healthcheck";

const app = express();
console.log("test");

app.use(healthcheckRouter);
console.log("test");

app.listen(process.env.PORT, () => {
  console.log(`Server be jammin' on ${process.env.PORT}!`);
});
