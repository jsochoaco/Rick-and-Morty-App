const {Favorite} = require("../DB_connection")

const postFav = async (req, res) => {
    try {
        const {id, name, species, gender,  image} = req.body
        if (!id || !name || !image || !species || !gender) return res.status(400).send("Faltan datos")
        await Favorite.findOrCreate({
            where: {id, name, species, gender, image}
        })
        const favorites = await Favorite.findAll()
        return res.status(200).json(favorites)

    } 
    catch (error) {
        return res.status(500).json({error: error.message})
        
    }
}



module.exports = postFav