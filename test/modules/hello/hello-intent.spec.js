'use strict';
const alexia = require('alexia');
const app = rootRequire('src/app');

describe('(Intent) Hello', () => {
  it('should create HelloIntent', () => {
    expect(app.intents['HelloIntent']).to.be.ok;
  });

  it('should handle HelloIntent', done => {
    const intentRequest = alexia.createIntentRequest('HelloIntent');

    app.handle(intentRequest, data => {
      const responseText = data.response.outputSpeech.text;
      expect(responseText).to.equal('Hello');
      done();
    });
  });
});
