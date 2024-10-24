const mongoose = require('mongoose')

const Users = new mongoose.Schema({
    usuario: {
      type: String,
      required: true,  // Campo obligatorio
      unique: true,    // El nombre de usuario debe ser único
      trim: true,      // Elimina espacios al inicio y al final
    },
    contrasena: {
      type: String,
      required: true,  // Campo obligatorio
    }
  }, {
    timestamps: true   // Agrega createdAt y updatedAt automáticamente
  });

module.exports = mongoose.model("Users", Users)

