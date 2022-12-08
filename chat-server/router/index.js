const router = require('express').Router()

router.get('/home', (req,res) => { 

  return res.send('Home Screen')

}) //req is home, response is homescreen



router.use('/', require('./auth'))
router.use('/chats', require('./chat'))

module.exports  = router
