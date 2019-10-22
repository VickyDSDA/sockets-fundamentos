const express = require('express');
const socketIO = require('socket.io');
const path = require('path');
const http = require('http');

//inicializamos el express
const app = express();

//crea un servidor
let server = http.createServer(app);

//declaramos un path pubico que es para hacer publica la carpeta pubic
const publicPath = path.resolve(__dirname, '../public');

//declaramos un puerto q sera el que heroku facilita o el 3000
const port = process.env.PORT || 3000;

//usamos el middleware para habilitar la carpeta pubic y q todo puedan acceder a ella
app.use(express.static(publicPath));

//Inicializa el socket, IO = esta es la comunicacion del backend
module.exports.io = socketIO(server);

require('./sockets/socket');

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});