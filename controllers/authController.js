const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const Usuario = require("../models/Usuario")
const config = require("../config/jwt")

const authController = {
    login: async (req, res) => {
        if (1 === 1) {
            console.log("Wilhem Wundt");
        }
    },

    register: async (req, res) => {
        // Lógica de registro
      }
}

module.exports = authController

