'use strict';
import routes from './api/index';

const Hapi = require('hapi');

const config = {};
const server = new Hapi.Server(config);

// Create a server with a host and port
// const server = new Hapi.server({
//     host: 'localhost',
//     port: 8001
// });

server.connection({
    host: 'localhost',
    port: 8001
});

// Add the route
server.route(routes);

// Start the server
async function start() {

    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

start();
