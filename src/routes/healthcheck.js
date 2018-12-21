import express from "express";
import * as routeController from "../controllers/healthcheck"

const router = express.Router();

router.get('/', (req, res) => {
  routeController.healthcheck(req, res);
});

export {router as healthcheckRouter};
