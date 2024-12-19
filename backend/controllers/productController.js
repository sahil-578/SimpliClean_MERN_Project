

const Product = require('../models/product');

exports.addProduct = async (req, res) => {
    try {
        let products = await Product.find({});
        let id = products.length > 0 ? products[products.length - 1].id + 1 : 1;

        const product = new Product({
            id: id,
            name: req.body.name,
            image : req.body.image,
            category: req.body.category,
            new_price: req.body.new_price,
            old_price: req.body.old_price,
        });

        await product.save();

        res.json({
            success: true,
            name: req.body.name,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        await Product.findOneAndDelete({ id: req.body.id });
        console.log('Deleted');
        res.json({
            success: true,
            name: req.body.name,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

exports.getAllProducts = async (req, res) => {
    try {
        let products = await Product.find({});
        console.log("All Products fetched");
        res.send(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};


exports.newcollections = async (req, res) => {
    try{
        let products = await Product.find({});
        let newcollection = products.slice(1).slice(-8);
        console.log("New Collection Fetched");
        res.send(newcollection);
    }
    catch(error){
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};


exports.popularcollections = async (req, res) => {
    try{
        let products = await Product.find({category: "broom"});
        let popularcollection = products.slice(0,4);
        console.log('Popular Collection Fetched');
        res.send(popularcollection);
    }
    catch(error){
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};