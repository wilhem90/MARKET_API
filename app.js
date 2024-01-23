const express = require("express")
const app = express()
const morgan = require("morgan")
const bodyParser = require("body-parser")
const cors = require('cors')
const mongoose = require("mongoose")

const routerProducts = require('./api/routes/products')
const routerOrder = require('./api/routes/order')

mongoose.connect('mongodb+srv://Wilhem90:' + process.env.MONGO_ATLAS_PW + '@cluster0.lbdcfgo.mongodb.net/?retryWrites=true&w=majority',
{
    useMongoClient: true
}
)

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