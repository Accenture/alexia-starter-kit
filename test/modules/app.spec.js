'use strict';
const app = rootRequire('src/app');
const alexia = require('alexia');

describe('(Alexa Skill) App', () => {
  it('should create app', () => {
    expect(app).to.be.ok;
  });

  it('should register all intents', () => {
    const intentNames = Object.keys(app.intents);
    expect(intentNames).to.have.length.above(0);
  });

  it('should handle LaunchRequest', done => {
    const launchRequest = alexia.createLaunchRequest();

    app.handle(launchRequest, data => {
      const text = data.response.outputSpeech.text;
      expect(text).to.equal('Welcome to Alexia Starter Kit');
      done();
    });
  });

  it('should handle SessionEndedRequest', done => {
    const sessionEndedRequest = alexia.createSessionEndedRequest();

    app.handle(sessionEndedRequest, data => {
      const text = data.response.outputSpeech.text;
      expect(text).to.equal('Goodbye from Alexia Starter Kit');
      done();
    });
  });
});
