const miFuncion = val => {
  if (typeof val === "number") {
    return 2 *val
  }
  // return false
  //o sino lanzamos un error.
  throw new Error("El valor debe ser de tipo numero.")
}

// const elDoble = miFuncion("ala")
const numero = 8
// probar aca de cambiar.

try {
  //codigo que puede fallar
  console.log("esta ejecutandose de manera correcta")
  const doble = miFuncion(numero)
  console.log(doble)
} catch(e) {
  //en caso de que falles quiero que ejecutes esto.
  console.error("ERROR!!")
  console.error(`El valor de e es ${e}`)
} finally {
  console.log("esto se va a ejecutar si hay un error como si no hubiese.")
}

//ERRORES MAS COMUNES. 
//internalError, syntacError, TypeError, RangeError y ReferenceError. 
