const express = require('express');
const path = require('path');
const compression = require('compression');

const server = express();

server.use(express.static(path.resolve(__dirname, '../..', 'dist')));
server.use(compression());

server.get('/*', (req, res) => {
  console.log(1);
  res.sendFile(path.resolve(__dirname, '..', 'index.html'));
});

server.listen(process.env.PORT || 8080, () => {
  console.log('8080');
});
