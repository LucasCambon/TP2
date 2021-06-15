const controlador =
{
    home: (req, res) => {
        res.render("home");
    },
    register: (req, res) =>{
        res.render("register");
    },
    login: (req, res) =>{
        res.render("login");
    },
    ofertas: (req, res) =>{
        res.send("OFERTAS");
    },
    tiendas_oficiales: (req, res) =>{
        res.send("TIENDA OFICIALES");
    },
    vender: (req, res) =>{
        res.send("VENDER");
    },
    ayuda: (req, res) =>{
        res.send("AYUDA");
    },
    carrito: (req, res) =>{
        res.send("MIS COMPRAS");
    }
}

module.exports = controlador;
