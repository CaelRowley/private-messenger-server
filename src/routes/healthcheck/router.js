import express from 'express';
import * as routeService from '../../services/healthcheck/route-service';

const router = express.Router();

router.get('/', (req, res) => {
  res.send(routeService.healthcheck());
});

export { router as healthcheckRouter };
