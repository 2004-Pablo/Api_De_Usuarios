const { Router } = require("express")
const { getUsers, getUserById, createUser } = require('../controllers/user.controllers.js')
const { validateUser } = require('../middlewares/user.middlewares.js')
const router = Router()

//rutas de usuario
router.get('/user', getUsers)

router.get('/user/:id', getUserById)

router.get('/user/:id/tasks',)

router.post('/user', validateUser, createUser)

router.put('/user/:id', validateUser, )

router.delete('/user/:id', )

//rutas de tareas
router.get('/tasks')


module.exports = router