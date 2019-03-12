const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT ? process.env.PORT : 3000;

app.prepare().then(() => {
  const server = express();

  server.use('/favicon.ico', express.static('public/favicon.ico'));

  server.use('/robots.txt', (req, res) => {
    res.sendFile(`${__dirname}/static/robots.txt`);
  });

  server.get('*', (req, res) => {
    handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
}).catch((ex) => {
  console.error(ex.stack);
  process.exit(1);
});
