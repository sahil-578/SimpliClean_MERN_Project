

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const path = require( 'path' );
const fetchUser = require('./middlewares/auth');

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

// Database Connection MongoDb
mongoose.connect("mongodb://127.0.0.1:27017/simpliclean_db", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Error connecting to MongoDB:", err));

// Set port
app.set('port', port);

// app.use('/images', express.static('upload/images'));
app.use('/images', express.static(path.join(__dirname, 'upload/images')));

// Routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

// app.post('/addtocart', fetchUser, async (req, res) => {
//     console.log('fetchUser Called');
//     console.log(req.body, req.user);
// });

// Start server
app.listen(port, (error) => {
    if (!error) {
        console.log("Server started on the port " + port)
    } else {
        console.log("Error :" + error)
    }
});
