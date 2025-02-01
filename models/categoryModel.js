// models/categoryModel.js
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
    getAllCategories: (callback) => {
        db.query('SELECT * FROM categories', callback);
    },
    createCategory: (name, callback) => {
        db.query('INSERT INTO categories (name) VALUES (?)', [name], callback);
    },
    updateCategory: (id, name, callback) => {
        db.query('UPDATE categories SET name = ? WHERE id = ?', [name, id], callback);
    },
    deleteCategory: (id, callback) => {
        db.query('DELETE FROM categories WHERE id = ?', [id], callback);
    }
};
