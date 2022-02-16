//! Creen un objeto persona

//? creen que un objeto puede contener una function?
const persona = {
    nombre: "Juanito",
    edad: 30,
    talla: 1.5,
    estadoCivil: "casada",
    calcularEdad: function () {
      console.log("calculando la edad");
    },
  };
  
  //* 1ra forma de llamar a una funcion que esta dentro de un objeto
  console.log("1er forma");
  persona.calcularEdad();
  
  //* 2da forma es parecida, sin embargo no se usan los parentesis
  console.log("2da forma");
  //* Esta solo funciona si la funcion tiene un return
  persona.calcularEdad;
  
  // TODO: Ejemplo
  //? Vamos a ver a como acceder a las propiedades del objeto desde una
  //? function interna
  
  //! this va a permitir accede a los datos del objeto padre
  const computadora = {
    color: "azul",
    marca: "HP",
    nuevo: true,
    mostrarDetalle: function () {
      // color no pertenece al ambito de la funcion
      console.log("color", this.color);
    },
    mostrarDetalleCompleto: function () {
      //! En los arrow function this no existe
      console.log(
        "Detalle",
        `Color: ${this.color} Marca: ${this.marca} Es nuevo? ${
          this.nuevo ? "Si" : "No"
        }`
      );
    },
  };
  
  const computadora2 = {
    color: "amarillo",
    marca: "Lenovo",
    nuevo: false,
    imprimirDetalle: function () {
      console.log(this.color);
    },
  };
  
  computadora.mostrarDetalle();
  computadora.mostrarDetalleCompleto();
  computadora2.imprimirDetalle();

  //obejeros con array

  const alumno={
      nombre:'juanito',
      notas: [10, 5, 8, 9],
      cursos:['html','css','js','react'],

  }
  console.log('notas', alumno.notas)

  //array de objsetos, tambien conocida con json
  //Json es un formato de archivos
  const alumnos=[
      {
          nombre: 'luciano',
          edad: 18,
          promedio:15,
      },
      {
        nombre:'el pepe',
        edad:21,
        promedio:14,
        direccion:'av. rosa de america'
      }
  ]
  console.log(`nota de ${alumnos[0].nombre}`, alumnos[0].promedio)

const laptops=[
    {
        marca:'lenovo',
        imagen:'',
        nombre:'ide centro aio i3',
        vendedor:'fallabella',
        preficoOferta: 1599,
        calificacion:2,
        caracteristicas:{
            procesador:'i3',
            tarjetaDeVideo:'integrada',
        }
    },
    {
        marca:'HP',
        imagen:'',
        nombre:'ide centro aio i78',
        vendedor:'fallabella',
        preficoOferta: 1599,
        calificacion:2,
        caracteristicas:{
            procesador:'i7',
            tarjetaDeVideo:'integrada',
        }
    }
]
 console.log(laptops)

 //key como numeros

 const listaDeUtiles={
     1:'hoja bond',
     2:'plumones',
 }
 console.log(listaDeUtiles['1'])

 //objetos dentro de objetos
 const componentes={
     nombre: 'lenovo',
     caracteristicas:{
         ram:10,
         tarjeta:'3060',
         memoria: 512,
     },
     1:{
        teclado:'español',
     },
 };
 console.log('tarjeta', componentes.caracteristicas.tarjeta)
 console.log('pantalla:', componentes.caracteristicas.ram)
 console.log('teclado', componentes[1].teclado)

 const laptop =[
    {
    nombre: 'Apple M1 Pro 10-Core Chip',
    carateristica:{
    memoria:'16GB Unified RAM',
    HDD:'1TB SSD',
    pantalla:'16.2" 3456 x 2234 Liquid Retina XDR Screen',
    procesaro:'16-Core GPU/16-Core Neural Engine',
   
    },    
},
 ]