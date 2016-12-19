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
      return done(app.t('text_error1'));
    }

    const dictionary = app.t('dictionary', {
      returnObjects: true,
      defaultValue: {}
    });

    lookupService.search(slots.item, dictionary).then(result => {
      if (result) {
        done(app.t('text', { slots, result }));
      } else {
        done(app.t('text_error2', slots));
      }
    }).catch(console.error);

  });
};
