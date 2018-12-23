import chai from 'chai';
import * as routeController from '../../../src/services/healthcheck/route-service';

const should = chai.should();

describe('Services: healthcheck', () => {
  context('routeController.healthcheck()', () => {
    it('should return "Health check!"', () => {
      routeController.healthcheck().should.equal('Health check!');
    });
  });
});
