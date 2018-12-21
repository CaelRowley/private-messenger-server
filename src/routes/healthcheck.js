const express = require("express");
const router = express.Router();
const routeController = require('../controllers/healthcheck');

router.get('/', (req, res) => {
  routeController.healthcheck(req, res);
});

module.exports = router;
