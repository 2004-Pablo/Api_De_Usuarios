const validatorShemas = require('../schemas/schemaValidator')

const validateShema = (schema) => {
    return (req,res,next) => {
        const { error } = validatorShemas(schema, req.body)
        if(error){
            return res.status(400).json({
                errores: error.details.map(err => {
                    return { message: err.message, path: err.path }
                })
            })
        }

        next()
    }
}

module.exports = { validateShema }