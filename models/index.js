const mongoose = require('mongoose')

// PROPIEDADES
//  direccion 
//  tipo de operacion 
//  tipo de propiedad
//  fecha de venta
//  antiguedad
//  precio 
//  visitantes 
//  imagen / imagenes
//  lat long
//  datos del propietario

const Propiedades = new mongoose.Schema({
    direccion: {
        calle: {type: String, required: true},
        numero: {type: Number, required: true},
        barrio: {type: String, required: true}
    },
    email: {
        type: String,
        validate: {
            validator: function(email) {
              return email.contains('.com');
            },
            message: 'Ese mail no es válido!'
          },
    },
    tipoDeOperacion: {type: String},
    tipoDePropiedad: {
        type: String,
        lowercase: true,
        trim: true,
        enum: {
           values: ["ph", "departamento", "casa"],
           message: "Ingresaste un valor en tipo de propiedad incorrecto"
        }
    
    },
    fechaDeVenta: {type: Date},
    antiguedadDeLaPropiedad: {
        type: Number,
        min: [0, "la antiguedad no puede ser menor a cero"],
        max: [50, "la antiguedad maxima es de 50"]
    },
    precio: {type: Number},
    visitantes: [
        {
            nombre: {type: String},
            apellido:{type: String},
            edad:{type: Number},
            fechaDeVisita : {type: Date}
        }
    ],
    imagen: {type: String, required: true},
    coordenadas: {type: String},
    propietario: {
        nombre: {type: String},
        apellido: {type: String},
        edad:{type: Number}
    }
})

module.exports = mongoose.model("Propiedades", Propiedades)