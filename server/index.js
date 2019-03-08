const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare()
  .then(() => {
    const app = express();

    app.get('*', (req, res) => handle(req, res));

    app.get('/', (req, res) => {
      res.render('home');
    });

    app.get('/about', (req, res) => {
      res.send('Faris is 29 and an all round amazing person.');
    });

    app.get('/cv', (req, res) => {
      res.send('So many amazing qualifications!');
    });

    app.get('/charlotte', (req, res) => {
      res.render('charlotte');
    });

    app.listen(3000, (err) => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    })
      .catch((ex) => {
        console.error(ex.stack);
        process.exit(1);
      });
  });
