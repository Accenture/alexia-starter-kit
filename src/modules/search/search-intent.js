'use strict';

const lookupService = require('./lookup-service');

/**
 * Register SearchIntent
 * Example invocation 1:
 *      - 'Alexa, ask <my-app-name> what is <Item>'
 *
 * Example invocation 2:
 *      - 'Alexa, start <my-app-name>'
 *      - 'What is <item>?'
 */
module.exports = app => {
  app.intent('SearchIntent', (slots, attrs, data, done) => {
    if (!slots.item) {
      done(
        app.t('text_error1')
      );
      return;
    }

    const locale = data.request.locale || app.i18next.language || 'en-US';
    const dictionaryT = app.i18next.getFixedT(locale, 'dictionary');

    lookupService.search(slots.item, dictionaryT).then(result => {
      if (result) {
        done(
          app.t('text', { slots, result })
        );
      } else {
        done(
          app.t('text_error2', slots)
        );
      }
    });
  });
};
