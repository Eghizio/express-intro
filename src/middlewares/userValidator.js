const { exists } = require("../utils");

const userValidator = (req, res, next) => {
    const isValidBody = exists(req.body.name) && exists(req.body.email);

    if(!isValidBody){
        return res.status(400).json({ message: "Invalid body." }).end();
    }
    
    req.user = {
        name: req.body.name,
        email: req.body.email,
    };

    next();
};

module.exports = userValidator;