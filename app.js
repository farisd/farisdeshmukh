const express = require('express');
const handlebars = require('express-handlebars');

const app = express();
const port = 8080;

app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.send('Welcome to farisdeshmukh.com 👋');
});

app.get('/about', (req, res) => {
  res.send('Faris is 29 and an all round amazing person.');
});

app.get('/cv', (req, res) => {
  res.send('So many amazing qualifications!');
});

app.get('/archive', (req, res) => {
  res.send('All the incredible blog posts I constantly write.');
});

app.listen(port, () => console.log(`Our app is now listening on port ${port}!`));
