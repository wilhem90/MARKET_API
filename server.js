const express = require("express")
const app = express()

const {MongoClient, ServerApiVersion} = require("mongodb")
const cors = require("cors")
const { clearScreenDown } = require("readline")
require("dotenv").config()

app.use(cors())
const port = process.env.PORT

app.listen(port, () => {
    console.log(`O meu primeiro servidor esta rodando: htpp://localhost:${port}`);
})
