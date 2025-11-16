const { User, Tarea } = require('../db/models');
const controllers = {}

const getUsers = async (_,res) => {
    const users = await User.findAll()
    res.status(200).json(users)
}

const getUserById = async(req,res) => {
    const { id } = req.params
    try{
        const foundUser = await User.findByPk(id)
        res.status(200).json(foundUser)
    }catch(err){
        res.status(404).json({messaje: "Usuario no encontrado"})
    }
}

const createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body)
        newUser.save()
        res.status(201).json(newUser) 
    } catch (error) {
        console.error("Error al crear el usuario:", error);
    }
}

controllers.getUsers = getUsers
controllers.getUserById = getUserById
controllers.createUser = createUser

module.exports = { getUsers, getUserById, createUser }