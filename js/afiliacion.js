
//Operador Ternario pregunta si es mayor de edad para registrar formulario de adhesion

let edad = parseInt(prompt("por favor ingresa tu edad para registrarte, debes ser mayor a 18 para hacerlo "))

edad > 18 ? Swal.fire(
  'Eres Mayor!',
  'puedes continuar',
  'success'
) : Swal.fire(
  'Eres menor!',
  'lo sentimos no puedes continuar, de hacerlo tu solicitud no se tendra en cuenta',
  'error'
)


//Usando Email JS y haciendo una peticion POST a una API // se incluye print en carpeta "img" de Servidor api.


const btn = document.getElementById('btnafililiacion');

document.getElementById('registro')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_m4nb52j';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      Swal.fire({
        title: 'Gracias por confiar en nosotros!',
        text: 'Ya eres parte de Megafit',
        imageUrl: './img/aplauso.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        timer: 3000
    });location. reload()
    
    }, (err) => {
      btn.value = 'Send Email';
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Ocurrio un error en el registro',
        showConfirmButton: false,
        timer: 1500
      })(JSON.stringify(err));
      
    });

});




//Otra manera de validar formulario
//Incorporando eventos y usa DomContentLoaded para cargar primero//

/*document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("registro").addEventListener('submit', validacionFormulario); 
  });
  //Funcion para Validar el formulario por variables independientes y muestra alertas sino completa s/condicion
  function validacionFormulario(evento) {
    evento.preventDefault();
    let nombre = document.getElementById('nombre').value;
    if(nombre.length == 0) {
      alert('Completa este campo');
      return;
    }
    let apellido = document.getElementById('apellido').value;
    if(apellido.length == 0) {
      alert('Completa este campo');
      return;
    }
    let clave = document.getElementById('clave').value;
    if (clave.length < 6) {
      alert('Completa este campo');
      return;
    }
    let email = document.getElementById('email').value;
    if(!email.includes ("@") && email.includes (".")  ) {
      alert('Ingrese un correo valido con @ y . ');
      return;
    }
    let direccion = document.getElementById('direccion').value;
    if(direccion.length == 0) {
      alert('Completa este campo');
      return;
    }
    let provincia = document.getElementById('provincia').value;
    if(provincia.length == 0) {
      alert('Completa este campo');
      return;
    }
    let ciudad = document.getElementById('ciudad').value;
    if(ciudad.length == 0) {
      alert('Completa este campo');
      return;
    }
    
    
    
    this.submit();//Completando suscripcion deriva a ventana de SweetAlert
    Swal.fire({
      title: 'Gracias por confiar en nosotros!',
      text: 'Ya eres parte de Megafit',
      imageUrl: './img/aplauso.jpg',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      timer: 3000
  })


  
  }
  
 */


