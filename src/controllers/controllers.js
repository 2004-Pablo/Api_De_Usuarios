const { user } = require('../db/models');
const controllers = {}

const getUsers = async (_,res) => {
    const users = await user.findAll()
    res.status(200).json(users)
}
controllers.getUsers = getUsers

const getUserById = async(req,res) => {
    const { id } = req.params
    try{
        const foundUser = await user.findByPk(id)
        res.status(200).json(foundUser)
    }catch(err){
        res.status(404).json({messaje: "Usuario no encontrado"})
    }
}
controllers.getUserById = getUserById

module.exports = controllers