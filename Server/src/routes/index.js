const express = require("express")
const { getCharById } = require("../controllers/getCharById")
const router = express.Router()
const {login} = require("../controllers/login")
const {postFav, deleteFav} = require("../controllers/handleFavorites")



router.get("/character/:id", getCharById)
router.get("/login", login)
router.post("/fav", postFav)
router.delete("/fav/:id", deleteFav)

module.exports = router