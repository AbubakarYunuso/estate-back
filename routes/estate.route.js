const Router = require('express')
const {estateController} = require('../controllers/estate.controller')
const multerMW = require('../middleware/multer.middleware')

const router = Router();

router.get('/estates', estateController.getEstates);
router.get('/estates/:id', estateController.getEstatesById);
router.post('/estates', multerMW.single('image'), estateController.postEstate);
router.patch('/estates/edit/:id', estateController.patchEstate);
router.delete('/estateDel/:id',estateController.deleteEstate)

module.exports = router