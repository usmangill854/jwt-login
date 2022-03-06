const express = require('express')
const auth = require('../middleware/auth')
const router = express.Router()
const {getAll,createUser,login,logout} = require('../controlers/userControler')



router.route('/').get(getAll).post(createUser)
router.route('/login').post(login)
router.route('/logout').post(logout)
module.exports = router