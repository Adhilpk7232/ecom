const express = require("express")
const router = express.Router()
router.get('/login', (req, res) => {
    res.render('user/login', { layout: 'layouts/main' });
  });
router.get('/register', (req, res) => {
    res.render('user/register', { layout: 'layouts/main' });
  });
  router.get('/home', (req, res) => {
    res.render('user/home', { layout: 'layouts/main' });
  });
  router.get('/product', (req, res) => {
    res.render('user/product-list', { layout: 'layouts/main' });
  });
   router.get('/productDetail', (req, res) => {
    res.render('user/product-detail', { layout: 'layouts/main' });
  });
  router.get('/profile', (req, res) => {
    res.render('user/profile', { layout: 'layouts/main' });
  });
  router.get('/cart', (req, res) => {
    res.render('user/cart', { layout: 'layouts/main' });
  });
  
module.exports = router