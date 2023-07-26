const Router = require('express')
const { basketController } = require('../controllers/baskets.controller')
const router = Router()

router.post('/busket/:id', basketController.addToBasket)
router.get('/buskets', basketController.getBasket)
router.delete('/busket/:id', basketController.deleteInBasket)

module.exports = router;