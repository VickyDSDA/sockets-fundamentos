//Aqui declaramos todas las funciones que se quira q se ejecuten cuando recibimos informacion del servidor o enviar información 
var socket = io();
//on es para escuchar info
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});
//emit es para enviar información
socket.emit('enviarMensaje', {
    usuario: 'Victoria',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Respuesta del server', resp);
});
//escucha info
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
})