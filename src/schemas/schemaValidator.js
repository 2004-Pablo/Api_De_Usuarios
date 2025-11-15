const { Model } = require("sequelize");

const validatorShemas = (schema, data) => {
    const { error, value } = schema.validate(data, { abortEarly: false });
    return { error, value}
}

module.exports = { validatorShemas }