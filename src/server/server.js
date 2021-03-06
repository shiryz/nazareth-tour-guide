const express = require('express');
const path = require('path');
const compression = require('compression');

const server = express();

server.use(express.static(path.resolve(__dirname, '../..', 'dist')));
server.use(compression({ level: 1 }));

server.get('/*', (req, res) => res.sendFile(path.resolve(__dirname, '../../dist', 'index.html')));

server.listen(process.env.PORT || 8080, () => {
  console.log('8080');
});
