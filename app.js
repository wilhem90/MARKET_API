const express = require("express")
const app = express()
const morgan = require("morgan")
const bodyParser = require("body-parser")
const cors = require('cors')

const routerProducts = require('./api/routes/products')
const routerOrder = require('./api/routes/order')
const { ppid, nextTick } = require("process")


app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(cors())


app.use('/products', routerProducts)
app.use('/order', routerOrder)

app.use((req, res, next) =>{
    const error = ('Not found')
    res.statusCode = 404
    res.send({
       message: error
    })
    next()
})


module.exports = {
    app
};