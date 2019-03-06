const express = require('express');
const handlebars = require('express-handlebars');

const app = express();
const port = process.env.PORT ? process.env.PORT : 8080;

// Define rendering engine + static directory
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.static('static'));

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

app.listen(port, () => console.log(`Our app is now listening on port ${port}!`));
