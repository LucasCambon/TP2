const express = require("express")
const controlador = require("./../controllers/mainController")
const router = express()

const mainController = require("./../controllers/mainController")

router.get("/",mainController.home)


router.get("/register",mainController.register)
router.get("/login",mainController.login)
router.get("/ofertas",mainController.ofertas)
router.get("/tiendas_oficiales",mainController.tiendas_oficiales)
router.get("/vender",mainController.vender)
router.get("/ayuda",mainController.ayuda)
router.get("/carrito",mainController.carrito)

module.exports = router;