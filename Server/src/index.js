// const axios = require('axios')
const http = require('http')
// const fs = require('fs')


http.createServer((request, response)=> {
    response.setHeader('Access-Control-Allow-Origin', '*');
    if(request.url.includes('/rickandmorty/character')) {
        const id = request.url.split('/').at(-1)

        const characterFind = characters.find((character)=>  character.id === Number(id))

        response.writeHead(200, { 'Content-type': 'application/json'})
        response.end(JSON.stringify(characterFind))
    }
}).listen(3001)


