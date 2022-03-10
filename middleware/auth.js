const { json } = require('express/lib/response')
const jwt = require('jsonwebtoken')

module.exports = (req,res,next) => {
    
    try {
        let head = req.headers.authorization
        // console.log(head,'check')
         
        // console.log(req.session.token,'tok')
        // console.log(head,'head')
        if(head === req.session.token){
        let decode = jwt.verify(req.session.token,'secretKey')
        req.userData = decode
        }
        console.log('auth is working')
        next()   
    } catch (error) {
        console.log('error')
        res.status(401).json({
            
            error: 'Invalid token'
        })
    }

    // let a=JSON.parse(token)
    // console.log(token)

    
}