const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 3000;

var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public')); // buildin mddle where to define our root dir

app.get('/', (req, res) => {
  res.send('hello express!');
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
      pageTitle: 'about page', // injected args to hbs file to render
      currentYear: new Date().getFullYear()
  }); // ./views is the default directory that express is using for the templates
});

app.listen(port, () => {
  console.log(`server is up on port ${port}`);
}); // second arg is methid to run while server is launching
