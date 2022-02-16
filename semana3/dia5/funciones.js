//funcion es un conjunto de soluciones para poder ralizar problemas
function nombreDeLaFuncion(){
    //una ves declarada mi funcion todo el codigo que haga
    //dentro de esta solo se va ejecutar cuando llame a la funcion
console.log('mi primera funcion')
}

//para llamr a una funcion solo se necesita su nombrey parentesis
nombreDeLaFuncion()

//? una funcion es creada para reutilizar codigo
// su mmision es realizar un trabajo repetitivo

//toda funcin puede recibir parametros
//function sumar(numero1, numero2){
    //convertir los parametros a numeros
    //const convertirNumero1=+numero1
    //const convertirNumero2=+numero2
    //typeof es uan funcion de js la cual me permite saber el tipo de dato de un avriable
    //const suma=convertirNumero1+convertirNumero2
    //si suma es nan debo imprimir un msj de error
    //isNaN me permite saber si un numero es nan
    //if(isNaN(suma)){
        //console.log('error: no se puede sumar')
        //si entra al if y ve el retunr la funcion termina aca, no ejecuta mas
        //return
    //}
    //console.log('suma:', suma)

//}
//function sumar(numero1, numero2){
    //const sumar=+numero1 + +numero2

    //if(isNaN(sumar)){
       // return 'error: no se puede sumar'
//}

//return sumar
//}

//operador ternario
//condicion? true(si es true puede ejecutar una linea) :fase(si es falso ejecuta )
function sumar(numero1, numero2){
    const sumar=+numero1 + +numero2

    return isNaN(sumar)? 'error: no se puede sumar' : sumar

}


console.log (sumar(10,20))
sumar('10',20)
console.log (sumar('hola',20))
//const num1 = +prompt('ingrese numero1')
//const num2 = +prompt('ingrese numero2')
//sumar (num1,num2)

//se puede llamar una funcion dentro de otra?

//sfuncion de expresion
//conocido como funcion anonimo, funcion dentro de una variable

const resta=function(numero1,numero2){
    const calcResta=+numero1 - +numero2
    return isNaN(calcResta)? 'error: no se puede sumar' : calcResta
}

console.log('reta:', resta(10,20))

const multiplicacion=function(numero1,numero2){
const calmultiplicacion=+numero1 * +numero2
return isNaN(calmultiplicacion)? 'error: no se puede sumar' : calmultiplicacion

}
console.log('multiplicacion:', multiplicacion(5,2))

//arrow funtion-funciones flecha
//parecida a la anonima, no hace falta utilizar l palabra function
//otro punto impottante es que no puede utilizar this
//cmo declaramos

const division =(numero1,numero2)=>{
    if (+numero2===0){
        return 'error: no se puede dividir'
    }
    const calcdivision=+numero1 / +numero2
    return isNaN(calcdivision)?'error: no se puede divir':calcdivision

}

console.log(division(10,0))
console.log('division', division(10,2))

//cuando nuestra funcion recibe solo un parametro no hace falta poner parentesis
const saludat=(nombre,apellido)=>{
    //cmo imprimir de una forma mas elegante
    return `hola mi nombre es ${nombre} y mi apellido es ${apellido}`
}

console.log(saludat('juan','perez'))
//cuando un arrow no recibe parametros no hace falta poner parentesis

const funcionsinparametros=(_)=>{
    return "hola mundo"
}

//arrow inline, solo funciona cuando quiero ejecutar un aline ade codigo
//return implisito
const hello=()=>'hola mundo'

//sabemos que cuando declaro una variable se nombre ya no se puede usar
