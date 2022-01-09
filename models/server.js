const express = require('express');
const cors = require('cors');


class Server{

   constructor(){
      this.app    = express();
      this.port   = process.env.PORT;
      this.server = require('http').createServer(this.app);
      this.io     = require('socket.io')(this.server);

      //middlewares
      this.middlewares();

      //Rutas
      this.routes();

      //Sockets
      this.sockets();
   }

   middlewares(){

      //cors
      this.app.use(cors());

      //directorio publico
      this.app.use(express.static('public'));

   }

   routes(){
      // this.app.use('/api/buscar', require('../routes/buscar'));
      // this.app.use('/api/auth', require('../routes/auth'));
      // this.app.use('/api/usuarios', require('../routes/usuarios'));
      // this.app.use('/api/categorias', require('../routes/categorias'));
      // this.app.use('/api/productos', require('../routes/productos'));
      // this.app.use('/api/uploads', require('../routes/uploads'));
   }

   sockets(){
      this.io.on('connection', socket => {
         socket.on('disconnect', ()=>{
            console.log('Cliente desconectado', socket.id);
         });
         
         socket.on('enviarmensaje', (payload)=>{
            // console.log(payload);
            this.io.emit('enviarmensaje', payload);
         });
      });
   }


   listen(){
      this.server.listen(this.port, ()=>{
         console.log('Servidor corriendo en el puerto', this.port);
      });
   }

   

}

module.exports = Server;