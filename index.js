// LLAMAR A EXPRESS (DEPENDENCIA)

const express = require('express')
const router = require('./routes/index')

const app = express()
//EL ORGANIZADOR DE LA DATA
app.use(express.json())

//EL ORGANIZADOR DE LAS RUTAS
app.use('/', router)

//FUNCION PARA LEVANTAR NUESTRO SERVIDOR
app.listen(3000, () => {
  console.log("Servidor escuchando en puerto 3000");
});



