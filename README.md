Product & Category Management System by Sandip Pande

Project Description

This is a Node.js-based web application for managing products and categories using Express.js, MySQL, and the EJS view engine.
=====================================================================
Features

Add, update, and delete products

Categorize products

View all products with their respective categories

Technologies Used

Node.js

Express.js

MySQL2

EJS (Embedded JavaScript Templates)

=================================================================================================
Installation Guide

1. Clone the Repository

git clone https://github.com/your-repo-url.git
cd Nimap

2. Install Dependencies

npm install

3. Set Up the Database

Create a MySQL database named nimapdb and run the following schema:

CREATE DATABASE nimapdb;
USE nimapdb;

CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
);

4. Start the Server

nodemon server.js

The server will start at http://localhost:3000
=================================================================================
Project Structure

Nimap/
│── public/
│   ├── css/
│   │   ├── styles.css
│   
│── views/
│   ├── products.ejs
|   |--- categories.ejs 
│   ├── index.ejs
│── models/
│   ├── productModel.js
│   ├── categoryModel.js
│── routes/
│   ├── productRoutes.js
│   ├── categoryRoutes.js
│── server.js
│── package.json
│── README.md
================================================================
API Endpoints

Products

Method

Endpoint

Description

GET

/products

View all products

POST

/products/add

Add a new product

POST

/products/update/:id

Update a product

POST

/products/delete/:id

Delete a product
=======================================================================================================
Troubleshooting

Database Connection Error: Ensure MySQL is running and the database is correctly set up.

Categories Not Defined: Ensure categoryModel.getAllCategories() is properly fetching data in productRoutes.js.

Author

Sandip Pande

