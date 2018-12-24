/* eslint-disable no-unused-vars, no-undef */
import chai from 'chai';
import socketIOClient from 'socket.io-client';
import app from '../../../src/app';

const should = chai.should();
const serverEndpoint = `http://localhost:${process.env.PORT}`;
const testMessage = 'test message';

describe('Socket Events: message', () => {
  context('emit message event', () => {
    it(`should respond with "${testMessage}"`, (done) => {
      const socket = socketIOClient(serverEndpoint);
      socket.emit('emit message', testMessage);
      socket.on('emit message', (message) => {
        message.should.equal(testMessage);
        done();
      });
    });
  });
});
