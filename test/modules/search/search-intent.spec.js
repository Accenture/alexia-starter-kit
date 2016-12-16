'use strict';
const alexia = require('alexia');
const sinon = require('sinon');

const app = rootRequire('src/app');
const lookupService = rootRequire('src/modules/search/lookup-service');

describe('(Intent) Search', () => {
  const description = 'a item defined in this dictionary';
  const unknownItem = 'someUnknownItem';
  let dictionaryStub;

  beforeEach(() => {
    dictionaryStub = sinon.stub(lookupService, 'search', (key, dictionary) => {
      return new Promise(resolve => {
        if (key === unknownItem) {
          resolve();
        } else {
          resolve(description);
        }
      });
    });
  });

  afterEach(() => {
    dictionaryStub.restore();
  });

  it('should create SearchIntent', () => {
    expect(app.intents['SearchIntent']).to.be.ok;
  });

  it('should handle SearchIntent', done => {
    const someItemKey = 'knownItem';
    const expectedResponseText = `${someItemKey} is ${description}`;
    const intentRequest = alexia.createIntentRequest('SearchIntent', {item: someItemKey});

    app.handle(intentRequest, data => {
      const responseText = data.response.outputSpeech.text;
      expect(responseText).to.equal(expectedResponseText);
      done();
    });
  });

  it('should reply with error message if item slot is empty', done => {
    const someItemKey = undefined;
    const expectedResponseText = 'I did not understand your search item';
    const intentRequest = alexia.createIntentRequest('SearchIntent', {item: someItemKey});

    app.handle(intentRequest, data => {
      const responseText = data.response.outputSpeech.text;
      expect(responseText).to.equal(expectedResponseText);
      done();
    });
  });

  it('should reply with not found phrase', done => {
    const someItemKey = unknownItem;
    const expectedResponseText = `No match found for ${someItemKey}`;
    const intentRequest = alexia.createIntentRequest('SearchIntent', {item: someItemKey});

    app.handle(intentRequest, data => {
      const responseText = data.response.outputSpeech.text;
      expect(responseText).to.equal(expectedResponseText);
      done();
    });
  });
});
