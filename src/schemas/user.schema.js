const joi = require('joi');

const userSchema = joi.object({
    userName: joi.string().min(5).max(20).required().messages({
        'string.empty': 'El nombre de usuario no puede ser vacio',
        'string.min': 'El nombre de usuario debe tener al menos 5 caracteres',
        'string.max': 'El nombre de usuario no puede exeder los 20 caracteres',
        'any.required': "El nombre de usuario es un dato requerido"
    }),
    firtName: joi.string().min(4).max(50).required().messages({
        'string.empty': 'El nombre no puede ser vacio',
        'string.min': 'El nombre de usuario debe tener al menos 4 caracteres',
        'string.max': 'El nombre de usuario no puede exeder los 50 caracteres',
        'any.required': "El primer nombre de usuario es un dato requerido"
    }),
    lastName: joi.string().min(2).max(50).messages({
        'string.empty': 'El nombre de usuario no puede ser vacio',
        'string.min': 'El nombre de usuario debe tener al menos 2 caracteres',
        'string.max': 'El nombre de usuario no puede exeder los 20 caracteres',
        'any.required': "El nombre de usuario es un dato requerido"
    }),
    email: joi.string().min(3).max(50).email(
        { minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }
    ).required().messages({
        "string.empty": "El email no puede ser vacío",
        "string.min": "El email no puede tener menos de 3 caracteres",
        "string.max": "El email tiene que tener como maximo 70 caracteres",
        "string.email": "El formato del email es invalido",
        "any.required": "El atributo email debe existir",
    }),
    password: joi.string().min(8).max(50).pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&._-])[A-Za-z\d@$!%*?&._-]+$/)
    .required().messages({
      'string.pattern.base': 'La contraseña debe incluir letras, números y símbolos (@$!%*?&._-)'
    }),
    fechaDeNac: joi.date().required().messages({
        'date.base': 'La fecha de nacimiento debe ser una fecha válida',
        'string.pattern.base': 'La fecha de nacimiento debe tener el formato DD-MM-AAAA',
        'any.required': 'La fecha de nacimiento es un dato requerido'
    })
})

module.exports = { userSchema }