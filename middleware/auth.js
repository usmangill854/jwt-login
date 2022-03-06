const { json } = require('express/lib/response')
const jwt = require('jsonwebtoken')

module.exports = (req,res,next) => {
    
    try {
        let token = req.session.token
        // console.log(token)
        let decode = jwt.verify(token,'secretKey')
        req.userData = decode
        next()   
    } catch (error) {
        res.status(401).json({
            error: 'Invalid token'
        })
    }

    // let a=JSON.parse(token)
    // console.log(token)

    
}