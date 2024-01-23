const express = require("express")
const app = express()
const routerProducts = require('./api/routes/products')
const routerOrder = require('./api/routes/order')

app.use('/products', routerProducts)
app.use('/order', routerOrder)

module.exports = {
    app
};