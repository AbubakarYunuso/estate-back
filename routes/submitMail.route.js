const  { Router } = require('express')
const { submitMailController } = require('../controllers/submitMail.controller')

const router = Router()

router.post('/api',submitMailController.submit)

module.exports = router