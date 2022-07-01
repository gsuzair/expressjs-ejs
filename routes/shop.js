const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const router = express.Router();
const adminData = require('./admin');

router.get('/', (req, res, next) => {
    // console.log(adminData.products)
    // res.sendFile(path.join(rootDir, 'views', 'shop.html')) //not using templating engine here
    const products = adminData.products;
    res.render('shop', {
        prods: products, 
        pageTitle: 'Shop', 
        path: '/'
    });
});

module.exports = router;