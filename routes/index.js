const usuarios = [
    {
      "uid": "1",
      "name": "Luke Skywalker",
      "url": "https://www.swapi.tech/api/people/1"
    },
    {
      "uid": "2",
      "name": "C-3PO",
      "url": "https://www.swapi.tech/api/people/2"
    },
    {
      "uid": "3",
      "name": "R2-D2",
      "url": "https://www.swapi.tech/api/people/3"
    },
    {
      "uid": "4",
      "name": "Darth Vader",
      "url": "https://www.swapi.tech/api/people/4"
    },
    {
      "uid": "5",
      "name": "Leia Organa",
      "url": "https://www.swapi.tech/api/people/5"
    },
    {
      "uid": "6",
      "name": "Owen Lars",
      "url": "https://www.swapi.tech/api/people/6"
    },
    {
      "uid": "7",
      "name": "Beru Whitesun lars",
      "url": "https://www.swapi.tech/api/people/7"
    },
    {
      "uid": "8",
      "name": "R5-D4",
      "url": "https://www.swapi.tech/api/people/8"
    },
    {
      "uid": "9",
      "name": "Biggs Darklighter",
      "url": "https://www.swapi.tech/api/people/9"
    },
    {
      "uid": "10",
      "name": "Obi-Wan Kenobi",
      "url": "https://www.swapi.tech/api/people/10"
    }
  ]

const express = require('express')

//UNA INSTANCIA PARA MANEJAR RUTAS
const router = express.Router()

//RUTAS 
router.get("/", (req, res)=>{
    console.log("BODY-->",req.body)
    console.log("PARAMS-->", req.params)

    const banda = req.body.banda
    const cancion = req.body.cancion

    res.status(200).send("La cancion "+ cancion + " De la banda "+ banda + "Fue agregada correctamente a la DB")
})

router.get("/users", (req, res)=>{
    res.status(200).send(usuarios)
})


router.get("/users/:uid", (req, res)=>{
    const uid = req.params.uid

    const usuarioFiltrado = usuarios.filter((usuario)=>usuario.uid === uid)

    res.status(200).send(usuarioFiltrado)
})

router.get("/products", (req, res)=>{
    res.status(200).send("Hasta luego!")
})

module.exports = router