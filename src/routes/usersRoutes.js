const express = require("express")
const path = require('path');
const multer = require("multer")
const multerDiskStorage = multer.diskStorage({
    destination: function(req, file, cb) {       // request, archivo y callback que almacena archivo en destino
     cb(null, path.join(__dirname,"../../public/images/users"));    // Ruta donde almacenamos el archivo
    },
    filename: function(req, file, cb) {          // request, archivo y callback que almacena archivo en destino
     let imageName = Date.now() + path.extname(file.originalname);   // milisegundos y extensión de archivo original
     cb(null, imageName);         
    }
});

const uploadFile = multer({ storage: multerDiskStorage });


const router = express()


const usersController = require("../controllers/usersController")



router.get("/register",usersController.registro)
router.post("/register",uploadFile.single("image"),usersController.store)
router.get("/login",usersController.ingreso)
router.get("/profile",usersController.perfil)


module.exports = router;