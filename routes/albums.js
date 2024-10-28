const express = require('express')
const Discos = require('../models/discos.js')
//UNA INSTANCIA PARA MANEJAR RUTAS
const router = express.Router()


//CRUD

//C ---> Crear POST
//R ---> Leer  GET
//U ---> Actualizar PUT
//D ---> Borrar DELETE

// CREATE
// titulo, fechaDeLanzamiento, precio, canciones
router.post('/discos', async (req, res)=>{
    try {
      await Discos.create(req.body)
      res.status(201).send("Disco agregado correctamente")
    } catch (error) {
      console.log(error)
      res.status(500).send("Error al crear el disco")
    }
})

// GET ALL ---> TRAER TODOS LOS DISCOS

//localhost:3000/discos/discos

router.get('/discos', async (req, res)=>{
  try {
    const result = await Discos.find({})

    res.status(200).send(result)
  } catch (error) {
    res.status(404).send("No data")
  }
})

//http://localhost:3000/discos
//GET x NOMBRE

router.get('/discos/:titulo', async (req, res)=>{
  //la-noche-estrellada
  try {
    const result = await Discos.find({titulo: req.params.titulo})
    res.status(200).send(result)
  } catch (error) {
    res.status(404).send("No data")
  }
})

//UPDATE

router.put('/discos/:id', async (req, res)=>{
  try {
      const id = req.params.id
      const newInfo = req.body

      console.log("NEW INFO", newInfo)

      const arr = [ { nombreDeCancion: 'Cancion 1 del album', duracion: 4 } ]

      await Discos.findByIdAndUpdate(id, {canciones: arr}, {new: true})

    res.status(200).send("Elemento actualizado correctamente")
  } catch (error) {
    console.log(error)
    res.status(500).send("Hubo un error en la actualizacion")
  }
})


router.delete('/discos/:id', async (req, res)=>{
  try {
      const id = req.params.id
      await Discos.findByIdAndDelete(id)

    res.status(200).send("Elemento eliminado correctamente")
  } catch (error) {
    console.log(error)
    res.status(500).send("Hubo un error en la eliminacion")
  }
})


module.exports = router
