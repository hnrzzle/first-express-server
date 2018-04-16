/* eslint no-console: off */
const http = require('http');
const app = require('./lib/app');
require('./lib/app');

const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log('server running on', server.address().port);
});