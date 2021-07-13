const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));


const controladorUsers  =
{
    perfil: (req, res) => {
        res.render("profile", {usuarios:users});
    },
    registro: (req, res) =>{
        res.render("../src/views/user-register");
    },
    store: (req, res) => {
		let obj = {
			id: users.length + 1,
			nombre: req.body.nombre,
			apellido: req.body.apellido,
			usuario: req.body.usuario,
			email: req.body.correo,
			contraseña: req.body.contraseña,
			calle: req.body.direccion,
			nroCalle: req.body.nroCalle,
			provincia: req.body.provincia,
			codPostal: req.body.codPostal,
			nacimiento: req.body.fechaNac,
			perfil: req.body.perfil,
			interes: req.body.interes,
			image: req.file.filename
		   }
           
		users.push(obj)
		fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), err => {
			if (err) {
				console.log('Error writing file', err)
			} 
			else {
				console.log('Successfully wrote file')
			}
		})
		console.log(obj)
		res.redirect("/")
	},
    ingreso: (req, res) =>{
        res.render("../src/views/login");
    },
}

module.exports = controladorUsers;