const { Router } = require("express")
const controllers = require('../controllers/controllers.js')
const router = Router()

router.get('/', controllers.getUsers)
router.get('/:id', controllers.getUserById)

module.exports = router