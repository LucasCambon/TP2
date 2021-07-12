const express = require("express")
const multer = require("multer")


const router = express()


const usersController = require("../controllers/usersController")



router.get("/register",usersController.registro)
router.post("/register",usersController.store)
router.get("/login",usersController.ingreso)
router.get("/profile",usersController.perfil)


module.exports = router;