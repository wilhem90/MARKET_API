const express = require("express")

const routerOrder = express.Router()


routerOrder.get('/', (req, res, next) => {
    res.status(200).json([
        {
            nome: "Wilhem Wundt",
            sobrenome: "Maxime",
            idade: 34
        },
        {
            nome: "Adventia",
            sobrenome: "Hyppolite",
            idade: 30
        }
    ])
})


routerOrder.post('/', (req, res , next) => {
    res.status(200).json({
        nome: 'Jonas',
        sobrenome: "Pierre",
        idade: 35
    })
})

module.exports = routerOrder