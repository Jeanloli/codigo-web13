//* addEventListener
//* La forma de JS moderno me permite agregar los eventos de una forma
//* mas legible
const btnPrueba = document.querySelector("#btn-prueba");

function showAlert(icon, title, text) {
  Swal.fire({
    icon,
    title,
    text,
    footer: "<a href='https://google.com'>Link de footer</a>",
  });
}

btnPrueba.onclick = function (event) {
  console.log("click desde el boton");
  console.log(event);
  Swal.fire("Hola mundo");
};

const btnPregunta = document.querySelector("#btn-pregunta");

btnPregunta.onclick = function () {
  Swal.fire("Alguna pregunta", "Aca el texto de la pregunta", "question");
};

const btnError = document.querySelector("#btn-error");

btnError.onclick = function () {
  showAlert("error", "Hubo un error", "Email or Password erroneos");
};

const btnWarning = document.querySelector("#btn-warning");
btnWarning.onclick = function () {
  showAlert("warning", "Hay una alerta de peligro", "El peligro se acerca");
};

const btnSuccess = document.querySelector("#btn-success");
btnSuccess.onclick = function () {
  showAlert("success", "Todo ok", "Todo salio bien");
};

const btnInfo = document.querySelector("#btn-info");
btnInfo.onclick = function () {
  showAlert("info", "Informacion", "Mensaje informativo de mi alerta");
};

const btnAlertaBotones=document.querySelector('#btn-alerta-botones')
btnAlertaBotones.onclick=function(){
  Swal.fire({
    title:'alerta',
    text:'texto alerta',
    showDenyButton:true,
    showCancelButton:true,
    confirButtonText:'Guardar',
    denyButtonText:'nel pastel',

  }).then((resultado)=>{
    if(resultado.isConfirmed){
      console.log('marco la confirmacion')
    }
    if(resultado.isDenied){
      console.log('marco que no')
    }
  })
}

const btnAtertaNotificacion=document.querySelector('#btn-alerta-notificacion')
//1000 es igual a un segundo
btnAtertaNotificacion.onclick=function(){
  Swal.fire({
    position:'top-end',//top,center,top-start,center-start,center-end,botton,bottom-end
    icon:'success',
    title:'notificacion',
    showConfirmButton:false,
    timer:3000
  })
}
const urlMarvel="https://www.cinemascomics.com/wp-content/uploads/2022/02/villanos-marvel-comics-960x720.jpg"

const btnAlertaImagen=document.querySelector('#btn-alerta-imagen')
btnAlertaImagen.onclick=function(){
  Swal.fire({
    title:'imagen',
    text:'alerta con imagen',
    imageUrl:urlMarvel,
    imgeWidth:300,
    imageHeight:300,
  })
}
const btnAlertCustom = document.querySelector("#btn-alerta-custom");
btnAlertCustom.onclick = function () {
  Swal.fire({
    title: "Custom Alert",
    text: "Alerta customisable",
    background: `url(${urlMarvel})`,
    color: "#fff",
    backdrop: `rgba(0,0,0,0.3)
    url(https://media.giphy.com/media/xT5LMHxhOfscxPfIfm/giphy.gif)
    left top no-repeat`,
  });
};

const btnAlertaInput=document.querySelector('#btn-alerta-inputs')
btnAlertaInput.onclick=function(){
  Swal.fire({
    title:'input para emai',
    input:'email',
    inputLabel:'ingrese su correo',
    inputPlaceholder:'El correo debe ser valido'

  }).then((resultado)=>{
    console.log(resultado.value)
  })
}




const paises = document.querySelector("#select-opciones");

// onchange: Sirve para detectar si hay un cambio en mi elemento
paises.onchange = function (event) {
  // de evento quiero obtener el value y options
  const { value, options } = event.target;

  console.log("valor de event", value);
  const index = options.selectedIndex;
  console.log("index", index);
  console.log("texto", options[index].text);
};

// const usuario = {
//   nombre: "Pepe",
//   apellido: "Zapata",
//   edad: 30,
//   direccion: {
//     calle: "Calle falsa",
//     numero: "123",
//     ciudad: "Madrid",
//   },
// };

// // Estoy lo puedo descomponer en una variable
// // Estos es conocido como destructuracion de objetos
// const { nombre, apellido, edad, direccion } = usuario;
// console.log(nombre); // Pepe