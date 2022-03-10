const express = require('express')
const auth = require('../middleware/auth')
const router = express.Router()
const {getAll,createUser,login,logout,allUsers} = require('../controlers/userControler')



router.route('/').post(createUser)
router.route('/').get(auth , getAll)
router.route('/all').get(allUsers)
router.route('/login').post(login)
router.route('/logout').post(logout)
module.exports = router