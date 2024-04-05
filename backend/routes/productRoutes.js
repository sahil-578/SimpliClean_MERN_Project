

const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const productController = require('../controllers/productController');

const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    },
});

const upload = multer({ storage: storage });

router.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${req.app.get('port')}/images/${req.file.filename}`,
    });
});

router.post('/addproduct', productController.addProduct);
router.post('/deleteproduct', productController.deleteProduct);
router.get('/allproducts', productController.getAllProducts);

module.exports = router;
