import express from 'express';
import * as routeController from '../../services/healthcheck/route-controller'

const router = express.Router();

router.get('/', (req, res) => {
  res.send(routeController.healthcheck());
});

export { router as healthcheckRouter };
