import chai from 'chai';
import * as routeController from '../../../src/services/healthcheck/route-service';

const should = chai.should();
const healthCheckResponse = 'Health check!';

describe('Services: healthcheck', () => {
  context('routeService.healthcheck()', () => {
    it(`should return "${healthCheckResponse}"`, () => {
      routeController.healthcheck().should.equal(healthCheckResponse);
    });
  });
});
