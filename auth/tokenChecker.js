const jwt = require('jsonwebtoken')
const config = require('../config.json')
const { status } = require('../util/db.config')

module.exports = (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers['x-access-token']
    let data = {}
    // decode token
    if (token) {    
        // verifies secret and checks exp
        jwt.verify(token, config.secret, function (err, decoded) {
            if (err) {
                data = {
                    success: false,
                    message: "Token หมดอายุ",
                    status: 401
                }
                return res.send(data);
            }
            req.decoded = decoded;
            next();
        });
    } else {
        // if there is no token
        // return an error
        data = {
            success: false,
            message: "ไม่พบ Token",
            status: 403
        }
        return res.send(data)
    }
}