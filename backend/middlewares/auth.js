const jwt = require("jsonwebtoken");

// to fetch a user

const fetchUser = async (req, res, next) => {
    try{
        const token = req.header('auth-token');
        if(!token){
            res.status(401).send({error: 'Please authenticate using valid token'})
        }
        else{
            try{
                const data = jwt.verify(token,'secret_data')
                req.user = data.user;
                console.log(req.user);
                next();
                
            }
            catch(e){
                console.error(e);
                res.status(401).send({error:'Invalid Token'});
            }
        }
    }
    catch(error){
        console.error(error);
        res.status(500).send({error:"Internal server error"});
    }
};

module.exports = fetchUser;