const { Router } = require("express")
const controllers = require('../controllers/controllers.js')
const router = Router()

router.get('/', controllers.getUsers)
router.get('/:id', controllers.getUserById)
router.post('/', controllers.createUser)

module.exports = router