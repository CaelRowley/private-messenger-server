import { healthcheckRouter } from './healthcheck/router';

export default (app) => {
  app.use(healthcheckRouter);
};
