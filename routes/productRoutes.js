// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const productModel = require('../models/productModel');
const categoryModel = require('../models/categoryModel'); // Import category model

// Route to get all products
router.get('/', (req, res) => {
    productModel.getAllProducts((err, products) => {
        if (err) {
            return res.status(500).send(err);
        }

        // Fetch categories
        categoryModel.getAllCategories((err, categories) => {
            if (err) {
                return res.status(500).send(err);
            }

            // Render the products view with products and categories
            res.render('products', { products, categories });
        });
    });
});

// Route to create a new product
router.post('/add', (req, res) => {
    const { name, category_id } = req.body;
    productModel.createProduct(name, category_id, (err) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.redirect('/products');
    });
});

// Route to update a product
router.post('/update/:id', (req, res) => {
    const { name, category_id } = req.body;
    const id = req.params.id;
    productModel.updateProduct(id, name, category_id, (err) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.redirect('/products');
    });
});

// Route to delete a product
router.post('/delete/:id', (req, res) => {
    const id = req.params.id;
    productModel.deleteProduct(id, (err) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.redirect('/products');
    });
});

module.exports = router;
