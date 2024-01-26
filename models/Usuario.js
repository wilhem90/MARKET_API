const mongoose = require("mongoose")

const usuarioSchema = new Schema ({
    nome: "Wilhem Wundt Maxime",
    email: "wilhemmaxime97@gmail.com",
    senha: "@Wilhem90"
})

module.exports = mongoose.model('Usuario', usuarioSchema)