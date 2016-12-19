'use strict';

/**
 * lookup utility used by searchIntent
 */
module.exports = {
  /**
   * Retrieves explanation for one key word from dictionary
   * @param {string} key - word to search
   * @param {Object} dictionary - object with keywords as properties and string as values
   */
  search: (key, dictionary) => new Promise(resolve => {
    setTimeout(() => {
      resolve(dictionary[key]);
    }, 500);
  })
};
