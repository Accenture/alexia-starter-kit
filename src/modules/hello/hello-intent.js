'use strict';
/**
 * Register HelloIntent
 * Example invocation 1:
 *      - 'Alexa, ask <my-app-name> to say hello'
 *
 * Example invocation 2:
 *      - 'Alexa, start <my-app-name>'
 *      - 'hello'
 */
module.exports = app => app.intent('HelloIntent', () => {
  return app.t('text');
});
