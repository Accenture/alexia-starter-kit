'use strict';
const dictionary = rootRequire('src/modules/search/dictionary');

describe('(Service) Dictionary', () => {
  const itemKeys = Object.keys(dictionary.items);

  it('should have some items', () => {
    expect(itemKeys).to.have.length.above(0);
  });

  it('should search and find item', () => {
    const itemKey = itemKeys[0];
    const promise = dictionary.search(itemKey);
    const expectedResult = dictionary.items[itemKey];

    return expect(promise).to.eventually.equal(expectedResult);
  });

  it('should search and resolve undefined for unknown item', () => {
    const itemKey = 'something else';
    const promise = dictionary.search(itemKey);
    const expectedResult = undefined;

    return expect(promise).to.eventually.equal(expectedResult);
  });
});
