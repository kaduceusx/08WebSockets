const express = require('express');
const cors = require('cors');


class Server{

   constructor(){
      this.app = express();
      this.port = process.env.PORT;

      //middlewares
      this.middlewares();

      //Rutas
      this.routes();
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

   listen(){
      this.app.listen(this.port, ()=>{
         console.log('Servidor corriendo en el puerto', this.port);
      });
   }

   

}

module.exports = Server;