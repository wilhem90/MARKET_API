const express = require("express")

const routerProducts = express.Router()

routerProducts.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Wilhem Wundt Maxime"
    })
})

routerProducts.post('/', (req, res, next) => {
    const product = {
        name: req.body.name,
        price: 12
    }
    res.status(201).json({
        message: "Opa produto foi criado com sucesso!",
        createdProduct: product
    })
})


routerProducts.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    console.log(id);
    if (id === `200`) {
        res.status(200).json({
            nome: "Wilhem Wundt",
            sobrenome: "Maxime",
            id: 200
        }) 
        }else {
            res.status(200).json({
                message: "Your id is not yet!"
            })
    }
})

routerProducts.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: "Updated product suscessful!"
    })
})

routerProducts.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: "Deleted product suscessful!"
    })
})
module.exports = routerProducts