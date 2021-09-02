require('dotenv').config();
const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

const server = express();

server.use(express.json())
server.use(cors())


server.get('/', (req,res) => {
    res.send(`<h1>Web 45 ROCKS!</h1>`)
})

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}!`)
})