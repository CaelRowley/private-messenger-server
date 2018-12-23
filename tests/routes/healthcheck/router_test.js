import chai from 'chai';
import request from 'supertest';
import { app } from '../../../src/app';

const should = chai.should();

describe('Routes: Healthcheck', () => {
  context('GET /', () => {
    it('should respond with a HTTP 200 OK', (done) => {
      request(app).get('/').end(function (err, res) {
        res.statusCode.should.equal(200);
        res.text.should.equal('Health check!');
        done();
      });
    });
  });
});
