const auth = require('../middleware/auth')
const User = require('../model/userModel')
const jwt = require('jsonwebtoken')

exports.getAll =(req,res) => {
    console.log(req.session.user)
    const user = req.session.user
    res.json({user:user})
    // console.log(req)
    // res.json({msg : 'hudhudhu'})
}



// app.get('/v1/getall',
// exports.auth,(req,res) => {
//     res.send('All Prod')
//     console.log(req)

// })


// app.post('/v1/login',
exports.login=async(req,res) => {
    try {
        const user = await User.findOne({email:req.body.email,password:req.body.password})
//    console.log(user)
        if(user){
            const token=jwt.sign(
                {
                    email:user.email,
                    id:user._id
                },
                'secretKey',
                {
                    expiresIn:'1h'
                }
            )
            console.log(user)
            req.session.user = user
            req.session.token = token
            res.status(200).json({ status:'success',token:token,user:user})
        }
        else
        res.json({status:'false',msg:'username or pass is incorrect'})

    } catch (error) {
        res.send(error)
    }
// res.send('sdds')
} 

// app.post('/v1/logout',
exports.logout =(req,res) => {

    req.session.token = null,
    req.session.user = null
    res.status(200).json({msg:'logged out'})
}
// )
// app.post('/v1/createUser',
exports.createUser = async (req,res) => {
    try {
        console.log('sadsass');
        const newUser = await User.create(req.body)
        res.status(201).json({
            status:'success',
            data: newUser
        })
    } catch (error) {
        console.log('sasa')
        res.send(error)
    }
}
// )
exports.allUsers = async(req,res) => {
    try {

        const user = await User.find()
        res.status(200).send(user)
        // res.status(200).json({count:User.count,user=user})
    } catch (error) {
        console.log(error)
    }
}
