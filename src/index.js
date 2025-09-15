const express = require('express');
const app = express()
const userRoutes = require('./routes/routes.js')
//const db = require('./db/models')['sequelize']

app.use(express.json())
app.use('/api', userRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT,(err)=>{
    if(err){
        console.error('Error: ', err.message)
        process.exit(1)
    }
    //db.sync({forse: true})
    console.log(`El servidor esta escuchando en el puerto ${PORT}`)
})