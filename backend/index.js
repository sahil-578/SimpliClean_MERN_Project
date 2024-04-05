

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');

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

// Routes
app.use('/', productRoutes);

// Start server
app.listen(port, (error) => {
    if (!error) {
        console.log("Server started on the port " + port)
    } else {
        console.log("Error :" + error)
    }
});
