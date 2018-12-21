import chai from "chai";
import * as healthcheckController from "../../src/controllers/healthcheck"
const should = chai.should();

describe("healthcheckController test suite", function () {
  context("healthcheckController.healthcheck()", function () {
    it('should return "Health check!"', function () {
      healthcheckController.healthcheck().should.equal("Health check!");
    });
  });
});
