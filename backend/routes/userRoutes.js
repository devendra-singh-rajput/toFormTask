const express= require('express')
const router = express.Router()
const getUser    = require('../controller/getUser')
const createUser = require('../controller/createUser')
const updateUser = require('../controller/updateUser')
const deleteUser = require('../controller/deleteUser')

router.get('/getUser',getUser)
router.post('/createUser',createUser)
router.put('/updateUser/:id',updateUser)
router.delete('/deleteUser/:id',deleteUser)



module.exports = { userRoute: router };;