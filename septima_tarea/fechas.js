// -----------------------------------------------------------
//FECHA DE HOY
const fecha = new Date()
console.log(fecha);


// -----------------------------------------------------------
//FECHA DE MI NACIMIENTO
const fecha5 = new Date("april 4, 1987 08:55:00")
console.log(fecha5);


// -----------------------------------------------------------
//VARIABLE INDICADORA COMPARADORA DE MI NACIMIENTO CON FEHCA  ACTUAL
const comparacion = fecha > fecha5
console.log(comparacion);


// -----------------------------------------------------------
//VARIABLE CONTENEDORA DEL DIA DE MI NACIMIENTO.
const dia = fecha5.getDate()
console.log(dia)


// -----------------------------------------------------------
//VARIABLE CONTENEDORA DEL MES DE MI NACIMIENTO.
const mes = fecha5.getMonth() + 1
console.log(mes)


// -----------------------------------------------------------
//VARIABLE CONTENEDORA DEL AÑO DE MI NACIMIENTO.
const anio = fecha5.getFullYear()
console.log(anio);
