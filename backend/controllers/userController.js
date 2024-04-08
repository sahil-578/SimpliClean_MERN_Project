const User = require('../models/user')
const jwt = require('jsonwebtoken')

exports.signup = async (req, res) => {
    try {
        let check = await User.findOne({ email: req.body.email});

        if(check) {
            return res.status(400).json({success:false, errors : "Existing user found with same E-mail address."})
        }

        let cart = {};
        for(let i = 0; i < 300; i++){
            cart[i] = 0;
        }

        const user = new User({
            name : req.body.username,
            email: req.body.email,
            password: req.body.password,
            cartData: cart,
        });

        await user.save();

        const data = {
            user : {
                id : user.id
            }
        }

        const token = jwt.sign(data, 'secret_data');
        res.json({success : true, token})


    }
    catch(error){

        console.error(error);
        return res.status(400).json({success : false , error : "Internal Server Error"});
    }
};

exports.login = async (req, res) => {
    try{
        let user = await User.findOne({email : req.body.email});
        if(user){
            const passCompare = req.body.password === user.password;
            if (passCompare) {
                const data = {
                    user: {
                        id: user.id
                    }
                }
                const token = jwt.sign(data, 'secret_data');
                res.json({ success: true, token });
            }
            else {
                res.json({ success: false, errors: "Wrong password" });
            }
        }
        else {
            res.json({ success: false, errors: "Wrong Email Id" });
        }
    }
    catch(error){
        console.error(error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
};