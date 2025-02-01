// models/productModel.js
const mysql = require('mysql2');

// Create a connection to the MySQL database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nimapdb'
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

// Functions for CRUD operations
module.exports = {
    getAllProducts: (callback) => {
        db.query(
            `SELECT products.id, products.name AS product_name, categories.name AS category_name, categories.id AS category_id
             FROM products
             LEFT JOIN categories ON products.category_id = categories.id`,
            callback
        );
    },
    createProduct: (name, categoryId, callback) => {
        db.query('INSERT INTO products (name, category_id) VALUES (?, ?)', [name, categoryId], callback);
    },
    updateProduct: (id, name, categoryId, callback) => {
        db.query('UPDATE products SET name = ?, category_id = ? WHERE id = ?', [name, categoryId, id], callback);
    },
    deleteProduct: (id, callback) => {
        db.query('DELETE FROM products WHERE id = ?', [id], callback);
    }
};
