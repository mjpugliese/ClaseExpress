// LLAMAR A EXPRESS (DEPENDENCIA)

const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')

const router = require('./routes/index.js')
const Propiedades = require('./models/index.js')
const Discos = require('./models/index.js')

const url = "mongodb+srv://maxipugliese:TxzdasGsam0FB2GF@clasemongo.5tbml.mongodb.net/?retryWrites=true&w=majority&appName=ClaseMongo"

const app = express()

//EL ORGANIZADOR DE LA DATA
app.use(express.json())
app.use(cookieParser())


const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

//EL ORGANIZADOR DE LAS RUTAS
app.use('/', router)


const connectToMongo = async ()=>{
  try{
   await mongoose.connect(url)
   //FUNCION PARA LEVANTAR NUESTRO SERVIDOR
    app.listen(3000, () => {
      console.log("Servidor escuchando en puerto 3000 y DB conectada");
    });

  }catch(error){
    //SI FALLA CAE ACA
    console.log(error)
  }  
}

connectToMongo()