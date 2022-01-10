
//Referencias del htmll
const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');

const socketCliente = io();

socketCliente.on('connect', ()=>{
   // console.log('connectadoo');
   lblOffline.style.display = 'none';
   lblOnline.style.display = '';
});

socketCliente.on('disconnect', ()=>{
   console.log('desconnnectado');
   lblOffline.style.display = '';
   lblOnline.style.display = 'none';
});


socketCliente.on('enviarmensaje', (payload)=>{
   console.log(payload);
})

btnEnviar.addEventListener('click', ()=>{

   const mensaje = txtMensaje.value;
   const payload = {
      mensaje,
      id: '1234',
      fecha: new Date().getTime()
   };
   
   socketCliente.emit('enviarmensaje', payload, (id)=>{
      console.log('Desde el server', id);
   });
   
});