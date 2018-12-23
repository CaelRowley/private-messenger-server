import { healthcheckRouter } from './healthcheck/router';

const addRouters = (app) => {
  app.use(healthcheckRouter);
};

export { addRouters };
