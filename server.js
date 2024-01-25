const express = require("express")
const app = express()

const {MongoClient, ServerApiVersion} = require("mongodb")
const cors = require("cors")

const dotenv = require("dotenv").config()
console.log(`A porta é: ${process.env.PORT}`);
console.log(`A sua senha é: ${process.env.SENHA_TO_CONECT}`);

console.log(app);