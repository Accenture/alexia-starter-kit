const app = require('../src/app');

/**
 * Expose Lambda handler function
 */
module.exports.handler = (request, context, callback) => {

  // Handle request using Alexia
  app.handle(request, alexaResponse => {

    // Invoke callback with our response
    callback(null, alexaResponse);
  });
};
