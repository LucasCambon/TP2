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
			nombre: req.body.nombres,
			apellido: req.body.apellidos,
			email: req.body.correo,
			contraseña: req.body.contraseña,
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