const router = require('express').Router()
const { index} = require('../controllers/chatController')
const { validate } = require('../validators')
const { auth } = require('../middleware/auth')
//const { chatFile } = require('../middleware/fileUpload')

router.get('/', [auth], index)
module.exports = router
