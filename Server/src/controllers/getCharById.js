
const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character";

const getCharById = (req, res)=>{
    const { id } = req.params;

        axios(`${URL}/${id}`)
        .then((response) => response.data )
        .then(({ name, status, origin, image, species, gender})=>{

            if(name){
                const character={
                    id,
                    name,
                    species,
                    origin,
                    image,
                    gender,
                    status
                }
                    return res.status(200).json(character)//.json se usa para obj de javascript
            }
            // no es necesario colocar un else ya que el return corta el resultado
            return res.status(404).send("Not found");
        })
        .catch((error)=>res.status(500).send(error.message))
    }


    module.exports = {
        getCharById
    }







// const axios = require('axios')

// const getCharById = (res, id)=> {
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((response)=> response.data)
//     .then((data)=> {
//         const character = {
//             id: data.id,
//             name: data.name,
//             gender: data.gender,
//             species: data.species,
//             origin: data.origin?.name,
//             image: data.image,
//             status: data.status
//         }
//         res.writeHead(200, { "Content-type": "application/json"})
//         res.end(JSON.stringify(character))
//     })
//     // .then(null, errorHandler)
//     .catch((error)=> {
//         res.writeHead(500, {"Content-type": "text/plain"})
//         res.end(error.message)
//     })

// }



// module.exports = getCharById