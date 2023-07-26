const Router = require('express')
const {commentsController} = require('../controllers/comments.controller')
const router = Router()
const authMiddleware = require('../middleware/auth.middleware')

router.get('/comments',commentsController.getComments)
router.post('/comments',authMiddleware ,commentsController.postComments)
router.delete('/comments/:id',authMiddleware,commentsController.deleteComments)

module.exports = router;