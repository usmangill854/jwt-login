const express = require('express')
const { default: mongoose } = require('mongoose')
const jwt = require('jsonwebtoken')
const User = require('./model/userModel')
const auth = require('./middleware/auth')
const session = require('express-session')

const app = express()

app.use(session({
    
}))

app.get('/v1/getall',auth,(req,res) => {
    res.send('All Prod')
    console.log(req.userData)
})

app.post('/v1/login',async(req,res) => {
    try {
        const user = await User.findOne({name:req.body.name,password:req.body.password})
   
        if(user){
            const token=jwt.sign(
                {
                    username:user.name,
                    id:user._id
                },
                'secretKey',
                {
                    expiresIn:'1h'
                }
            )
            
            
            res.status(200).json({ status:'success',token:token})
        }
        else
        res.json({status:'false',msg:'username or pass is incorrect'})

    } catch (error) {
        res.send(error)
    }
// res.send('sdds')
})

app.post('/v1/logout',(req,res) => {
    
})
app.post('/v1/createUser',async (req,res) => {
    try {
        const newUser = await User.create(req.body)
        res.status(201).json({
            status:'success',
            data: newUser
        })
    } catch (error) {
        res.send(error)
    }
})

mongoose.connect('mongodb+srv://gill:1234@cluster0.wuqqy.mongodb.net/User?retryWrites=true&w=majority',() => {
    console.log('db is connected')
})


app.listen(3000,() => {
console.log('server is running')
})