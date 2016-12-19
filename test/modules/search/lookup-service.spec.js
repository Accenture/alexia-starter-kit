'use strict';
const dictionary = rootRequire('src/modules/search/lookup-service');

describe('(Service) lookup Service', () => {
  const knownKey = 'knownKey';
  const knownDescription = 'knownDescription';
  const dummyDictionary = {
    knownKey: knownDescription
  };

  it('should resolve into description string when key was found', () => {
    const itemKey = knownKey;
    const promise = dictionary.search(itemKey, dummyDictionary);
    const expectedResult = knownDescription;

    return expect(promise).to.eventually.equal(expectedResult);
  });

  it('should resolve into undefiend when key was not found', () => {
    const itemKey = 'unknownKey';
    const promise = dictionary.search(itemKey, dummyDictionary);
    const expectedResult = undefined;

    return expect(promise).to.eventually.equal(expectedResult);
  });
});
