const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController');
const fetchUser = require('../middlewares/auth');

router.post("/signup", userController.signup);
router.post("/login", userController.login);

// Endpoint for adding products to cart data
router.post('/addtocart', fetchUser, userController.addtocart);

// Endpoint for removing products from cart data
router.post('/deletefromcart', fetchUser, userController.deletefromcart);

//  Endpoint to get the cart data
router.post('/getcart', fetchUser, userController.getcart);

module.exports = router;