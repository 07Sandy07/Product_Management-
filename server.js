const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const categoryRoutes = require('./routes/categoryRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));




// Home Route (Main Page)
app.get('/', (req, res) => {
    res.render('index', { title: 'Welcome to My Server' });
});

// Routes
app.use('/categories', categoryRoutes);
app.use('/products', productRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
