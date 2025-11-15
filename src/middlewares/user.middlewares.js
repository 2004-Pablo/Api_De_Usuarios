const { userSchema } = require('../schemas/user.schema')
const { validatorShemas } = require('../schemas/schemaValidator')

const validateUser = validatorShemas(userSchema)

module.exports = { validateUser }