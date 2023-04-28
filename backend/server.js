const express = require('express');
const cors = require('cors');
const http = require('http');
const app = express();
const server = http.createServer(app);
const io = require("./websocket/socket")
require('dotenv').config();

app.use(cors());
app.use(express.json());

//DB Connection
const conn = require("./src/db/connection");
conn();

//WebSocket
// inicializa o servidor websocket
io.attach(server);

//Routes
const router = require("./controller/router")
app.use(router);

server.listen(3050, () => {
    console.log('Servidor iniciado na porta 3050');
});