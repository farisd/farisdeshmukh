const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();

    server.get('*', (req, res) => handle(req, res));

    server.listen(3000, (err) => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    })
      .catch((ex) => {
        console.error(ex.stack);
        process.exit(1);
      });
  });
// // Define rendering engine + static directory
// app.engine('handlebars', handlebars());
// app.set('view engine', 'handlebars');
// app.use(express.static('static'));

// app.get('/', (req, res) => {
//   res.render('home');
// });

// app.get('/about', (req, res) => {
//   res.send('Faris is 29 and an all round amazing person.');
// });

// app.get('/cv', (req, res) => {
//   res.send('So many amazing qualifications!');
// });

// app.get('/charlotte', (req, res) => {
//   res.render('charlotte');
// });

// app.listen(port, () => console.log(`Our app is now listening on port ${port}!`));
