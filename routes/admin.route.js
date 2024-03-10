const express = require("express")
const axios = require('axios');
const router = express.Router()
const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'User' }
];

router.get('/login', (req, res) => {
    res.render('admin/login', { layout: 'layouts/main' });
  });
router.get('/dashboard', (req, res) => {
    res.render('admin/dashboard', { layout: 'layouts/main' });
  });
  router.get('/users', (req, res) => {
    res.render('admin/users', { layout: 'layouts/main',users });
  });
  router.get('/category', async(req, res) => {
    const response = await axios.get('http://65.21.3.61:9001/api/v1/categories');
        const categories = response.data;
    res.render('admin/category', { layout: 'layouts/main',categories });
  });
  router.get('/category/new', (req, res) => {
    res.render('admin/newcategory', { layout: 'layouts/main'});
  });
  router.get('/category/edit', (req, res) => {
    res.render('admin/editcategory', { layout: 'layouts/main' });
  });
  router.get('/classification', async (req, res) => {
    const response = await axios.get('http://65.21.3.61:9001/api/v1/collections');
        const collections = response.data;
    res.render('admin/classification', { layout: 'layouts/main',collections });
  });
  router.get('/classification/new', (req, res) => {
    res.render('admin/newclassification', { layout: 'layouts/main' });
  });
  router.get('/banner', async(req, res) => {
    const response = await axios.get('http://65.21.3.61:9001/api/v1/banners');
        const banners = response.data;
    res.render('admin/banner', { layout: 'layouts/main',banners });
  });
  router.get('/banner/new', (req, res) => {
    res.render('admin/newbanner', { layout: 'layouts/main' });
  });
  router.get('/product', (req, res) => {
    res.render('admin/product', { layout: 'layouts/main' });
  });
  router.get('/product/new', async(req, res) => {
    const response = await axios.get('http://65.21.3.61:9001/api/v1/categories/hierarchy');
        const categories = response.data;
    res.render('admin/newproduct', { layout: 'layouts/main',categories });
  });
  router.get('/order', (req, res) => {
    res.render('admin/order', { layout: 'layouts/main' });
  });
module.exports = router