const express = require('express')
const Discos = require('../models/discos.js')
//UNA INSTANCIA PARA MANEJAR RUTAS
const router = express.Router()

const albums = require('./albums.js')
const users = require('./users.js')

//router.use 
router.use("/health", (req, res) => res.sendStatus(200));
router.use('/discos', albums)
router.use('/user', users)

 module.exports = router

