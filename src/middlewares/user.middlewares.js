const { userSchema } = require('../schemas/user.schema')
const { validateShema } = require('./validate.schemas')

const validateUser = validateShema(userSchema)

module.exports = { validateUser }