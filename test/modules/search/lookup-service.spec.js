'use strict';
const dictionary = rootRequire('src/modules/search/lookup-service');

describe('(Service) lookup Service', () => {
  const knownKey = 'knownKey';
  const knownDescription = 'knownDescription';
  const dummySearchFcn = (query, options) => {
    const defaults = { defaultValue: null };
    const settings = Object.assign({}, defaults, options);

    if (query === knownKey) {
      return knownDescription;
    } else {
      return settings.defaultValue;
    }
  };

  it('should resolve into description string when key was found', () => {
    const itemKey = knownKey;
    const promise = dictionary.search(itemKey, dummySearchFcn);
    const expectedResult = knownDescription;

    return expect(promise).to.eventually.equal(expectedResult);
  });

  it('should resolve into null when key was not found', () => {
    const itemKey = 'unknownKey';
    const promise = dictionary.search(itemKey, dummySearchFcn);
    const expectedResult = null;

    return expect(promise).to.eventually.equal(expectedResult);
  });
});
