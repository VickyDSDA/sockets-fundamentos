const { io } = require('../server');

//para saber cuando un usuario(PC) se conecte
io.on('connection', (client) => {
    console.log('Usuario Conectado');

    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido a esta app'
    })

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        /*if (mensaje.usuario) {
            callback({
                mensaje: 'Todo salio bieen!!'
            });
        } else {
            callback({
                mensaje: 'Todo salio maal!!'
            });
        }*/


    })
});