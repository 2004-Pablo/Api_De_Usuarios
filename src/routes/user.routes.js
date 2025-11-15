const { Router } = require("express")
const { getUsers, getUserById, createUser } = require('../controllers/user.controllers.js')
//const { validateUser } = require('../middlewares/user.middlewares.js')
const router = Router()

router.get('/', getUsers)

router.get('/:id', getUserById)

router.post('/', createUser)

module.exports = router