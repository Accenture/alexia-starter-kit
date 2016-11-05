const app = require('../src/app');

/**
 * Create Hapi server for Alexia.
 * Hapi is optional dependency and its required to install it manually
 * You can change this file to use custom server. Be sure to expose POST endpoint on process.env.PORT
 */
const server = app.createServer();

// Start server
server.start(error => {
    if (error) throw error;
    console.log(`Server running at: ${server.info.uri}`);
});
