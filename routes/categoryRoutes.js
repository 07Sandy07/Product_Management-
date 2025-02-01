// routes/categoryRoutes.js
const express = require('express');
const router = express.Router();
const categoryModel = require('../models/categoryModel');

// Route to get all categories
router.get('/', (req, res) => {
    categoryModel.getAllCategories((err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.render('categories', { categories: results });
    });
});

// Route to create a new category
router.post('/add', (req, res) => {
    const { name } = req.body;
    categoryModel.createCategory(name, (err) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.redirect('/categories');
    });
});

// Route to update a category
router.post('/update/:id', (req, res) => {
    const { name } = req.body;
    const id = req.params.id;
    categoryModel.updateCategory(id, name, (err) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.redirect('/categories');
    });
});

// Route to delete a category
router.post('/delete/:id', (req, res) => {
    const id = req.params.id;
    categoryModel.deleteCategory(id, (err) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.redirect('/categories');
    });
});

module.exports = router;
