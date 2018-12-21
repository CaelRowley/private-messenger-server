import chai from "chai";
import * as healthcheckController from "../../src/controllers/healthcheck"
const should = chai.should();

describe("healthcheckController test suite", () => {
  context("healthcheckController.healthcheck()", () => {
    it('should return "Health check!"', () => {
      healthcheckController.healthcheck().should.equal("Health check!");
    });
  });
});
