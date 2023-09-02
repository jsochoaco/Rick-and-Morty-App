const {User} = require("../DB_connection")

const postUser = async (req, res) => {
    try {
        const {email, password} = req.body
        if (!email || !password) return res.status(400).send("Faltan datos") 
        const [user, creado] = await User.findOrCreate({
         where: {email, password} 
        })
        const usuario = {
            user: user,
            existe: creado
        }
        return res.status(200).json(usuario)
    } 
    catch (error) {
        return res.status(500).json({error: error.message})   
    }
}

module.exports = postUser