//cuantos datos contiene una variable?
//una variable contiene 1 dato a la vez
//un arrglo es un conjunto de datos
//para llenarlo se ingresa los datos separados por comas, e comienza a contar desde 0
 let alumnos=['erick','karina','patricia','kjaris','bruno']
 console.log('alumnos', alumnos)


 const variosTipos=[100,'juan',true,100.5]

 //imprimir un dato de un arrglo
console.log(alumnos[2])

//cambiar dato de un arrglo
 alumnos[0]='pepe'

 console.log('alumnos reasignado', alumnos)

 //agregar datos al arreglo
 alumnos[5]='erick'

 console.log('alumnos agregado', alumnos)

//cmo saber cuantos elemento tiene un arry

console.log('cantidad de alumnos', alumnos.length)

//en q posicion agrega a juan
alumnos[alumnos.length]='juan'
console.log('alumnos agregado', alumnos)

console.log('ultimo elemento', alumnos[alumnos.length-1])