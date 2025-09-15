const { user } = require('../db/models');
const controllers = {}

const getUsers = async (_,res) => {
    const users = await user.findAll()
    res.status(200).json(users)
}
controllers.getUsers = getUsers

module.exports = controllers