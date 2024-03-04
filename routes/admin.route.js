const express = require("express")
const router = express.Router()

router.get('/login', (req, res) => {
    res.render('admin/login', { layout: 'layouts/main' });
  });
router.get('/dashboard', (req, res) => {
    res.render('admin/dashboard', { layout: 'layouts/main' });
  });
  router.get('/category', (req, res) => {
    res.render('admin/category', { layout: 'layouts/main' });
  });
  router.get('/category/new', (req, res) => {
    res.render('admin/newcategory', { layout: 'layouts/main' });
  });
  router.get('/category/edit', (req, res) => {
    res.render('admin/editcategory', { layout: 'layouts/main' });
  });
  router.get('/classification', (req, res) => {
    res.render('admin/classification', { layout: 'layouts/main' });
  });
  router.get('/classification/new', (req, res) => {
    res.render('admin/newclassification', { layout: 'layouts/main' });
  });
  router.get('/banner', (req, res) => {
    res.render('admin/banner', { layout: 'layouts/main' });
  });
  router.get('/banner/new', (req, res) => {
    res.render('admin/newbanner', { layout: 'layouts/main' });
  });
  router.get('/product', (req, res) => {
    res.render('admin/product', { layout: 'layouts/main' });
  });
  router.get('/product/new', (req, res) => {
    res.render('admin/newproduct', { layout: 'layouts/main' });
  });
  router.get('/order', (req, res) => {
    res.render('admin/order', { layout: 'layouts/main' });
  });
module.exports = router