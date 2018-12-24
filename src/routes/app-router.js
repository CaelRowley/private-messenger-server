import { healthcheckRouter } from './healthcheck/router';

export const addRouters = (app) => {
  app.use(healthcheckRouter);
};
