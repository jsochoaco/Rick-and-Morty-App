const datos = require("../utils/users")


const login = (req,res) => {
    const {email, password} = req.query
    let access = false

    datos.forEach((dato)=> {
        if (dato.email === email && dato.password === password) {
            access = true
        }
    })
    return res.status(200).json({access})
}

module.exports = {
    login
}