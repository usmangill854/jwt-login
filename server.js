const express = require('express')
const { default: mongoose } = require('mongoose')
const User = require('./model/userModel')
const auth = require('./middleware/auth')
const cookieSession = require('cookie-session')
const router = require('./routes/userRoutes')
const req = require('express/lib/request')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())
app.use(cookieSession({
    // name: 'usman',
    keys: ['gill']

}))
app.use('/v1',router)

app.get('/v1/status',(req,res) => {
    console.log('status route',req.session)
})

mongoose.connect('mongodb+srv://gill:1234@cluster0.wuqqy.mongodb.net/User?retryWrites=true&w=majority',() => {
    console.log('db is connected')
})


app.listen(3000,() => {
console.log('server is running')
})