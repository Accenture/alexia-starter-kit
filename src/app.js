/**
 * Main Alexa app entry.
 * Global app configuration and all intent registering belongs here
 */

const alexia = require('alexia');
const app = alexia.createApp();

/**
 * Register callback to be executed once app is started without any intent.
 * Example invocation: 'Alexa, start <my-app-name>'
 */
app.onStart(() => 'Welcome to Alexia Starter Kit');

// Register all intents matching specified pattern
app.registerIntents('src/modules/**/*-intent.js');

module.exports = app;
