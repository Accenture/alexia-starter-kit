'use strict';

/**
 * lookup utility used by searchIntent
 */
module.exports = {
  /**
   * Retrieves explanation for one key word using localized search function
   * @param {string} key - word to search
   * @param {Function} localizedSearchFcn - translation function, takes options object specifying falsy return value when translation was not found
   */
  search: (key, localizedSearchFcn) => new Promise(resolve => {
    resolve(localizedSearchFcn(key, { defaultValue: null })); // cannot use default value undefined
  })
};
