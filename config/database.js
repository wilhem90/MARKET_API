require("dotenv").config()
console.log(process.env.URL_DB);
module.exports = {
    url: process.env.URL_DB
}