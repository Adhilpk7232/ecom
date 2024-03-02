// index.js
const express = require('express');
const hbs = require('hbs')
const path = require('path')
const app = express();
const PORT = process.env.PORT || 3000;
const  ip = "192.168.1.2"


// Set up Handlebars as the view engine

// app.engine('hbs', hbs.create ({extname: '.hbs',
// defaultLayout: 'main',
// layoutsDir: __dirname + '/views/layouts',
// partialsDir: __dirname + '/views/partials'}));

app.set('view engine', '.hbs'); // Set the view engine

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('admin/index', { layout: 'layouts/main' });
});
app.get('/dashboard', (req, res) => {
    res.render('admin/dashboard', { layout: 'layouts/main' });
  });
  app.get('/category', (req, res) => {
    res.render('admin/category', { layout: 'layouts/main' });
  });
  app.get('/classification', (req, res) => {
    res.render('admin/classification', { layout: 'layouts/main' });
  });
  app.get('/banner', (req, res) => {
    res.render('admin/banner', { layout: 'layouts/main' });
  });
  app.get('/product', (req, res) => {
    res.render('admin/product', { layout: 'layouts/main' });
  });
app.listen(PORT,ip, () => {
  console.log(`Server is running on http://${ip}:${PORT}`);
});
