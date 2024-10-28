const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')

const User = require('../models/user');
const jwt = require('jsonwebtoken')

//VERIFY

const tokenGenerado = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoiSlVBTiIsImlhdCI6MTcyOTcyOTUzNywiZXhwIjoxNzI5NzQwMzM3fQ.qfikY6cT8jwN28QweOrjV8WdvItmxgqJiirvjlGrjHI"

const verificandoToken = ()=>{
    try {
        const secret = 'hola'
        const result = jwt.verify(tokenGenerado, secret)

        console.log(result)
        return result
    } catch (error) {
        console.log(error)
    }
}

const saltRound = 10
const hashPassword = async (pass)=>{
    const hash = await bcrypt.hash(pass, saltRound)
    return hash
}

const checkPassword = async (pass, dbpass)=>{
    const match = await bcrypt.compare(pass, dbpass)
    console.log('RESLTADO MATCH', match)

    return match
}

// Ruta para crear un nuevo usuario
router.post('/register', async (req, res) => {
  //const { usuario, contrasena } = req.body;
    const usuario = req.body.usuario
    const contrasena = req.body.contrasena

  try {
    // Crear un nuevo usuario
    const contrasenaHasheada = await hashPassword(contrasena)

    const newUser = new User({ usuario: usuario, contrasena: contrasenaHasheada });
    await newUser.save();
    res.status(201).json({ message: 'Usuario creado exitosamente' });
  } catch (error) {
    res.status(400).json({ error: 'Error al crear el usuario', details: error });
  }
});

router.post('/login', async (req, res) => {
      const usuario = req.body.usuario
      const contrasena = req.body.contrasena
      console.log("COOKIES", req.cookies)
    try {
      const userLog = await User.findOne({usuario}) 
        console.log(userLog)

      const result = await checkPassword(contrasena, userLog.contrasena)

      // SIGN 
      //   informacion , codigo secreto, duracion

        const secret = "hola"
        const payload = {
            usuario: userLog.usuario
        }

        const token = jwt.sign(payload, secret, {expiresIn: '3h'})

        // verificandoToken()

      res.cookie("token", token)
      res.status(200).json({  });
    } catch (error) {
      console.log(error)
      res.status(404).json({  });
    }
  });
    

module.exports = router;