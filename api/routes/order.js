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
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    }
    res.status(201).json({
        status: {message: "Order criated"},
        order

    })
})

routerOrder.get('/:orderId', (req, res, next) => {
    const id = req.params.orderId
    console.log(`Your id is ${id}`);
    res.status(200).send({
        userId: 200,
        name: "Wilhem Wundt"
    })
})

routerOrder.patch('/:orderId', (req, res, next) => {
    const id = req.params.orderId
    console.log(`Your id is ${id}`);
    res.status(200).send({
        message: "Data updated"
    })
})

routerOrder.delete('/:orderId', (req, res, next) => {
    const id = req.params.orderId
    console.log(`Your id is ${id}`);
    res.status(200).send({
        message: "Data Deleted"
    })
})


module.exports = routerOrder