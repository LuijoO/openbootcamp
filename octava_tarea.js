// Una función sin parámetros que devuelva siempre "true"
function nada() {
  console.log(true)
  return true
}

nada()

// ------------------------------------------------------------
//FUNCION ASINCRONA QUE ESCRIBE A LOS 5 SEGUNDOS.
/* const asincFunction = () => {
  console.log("Hola soy una promesa");
}

setTimeout(asincFunction, 5000) */

// ------------------------------------------------------------
//FUNCION GENERADORA DE INDICES PARES. 
function* generaIndice() {
  let i = 0;
  while(true) {
    i++
    if(i>0) {
      i*2
      return i
    }
    yield i
  }
}

const result = generaIndice()

console.log(result.next().value)
console.log(result.next().value)
console.log(result.next().value)
console.log(result.next().value)
console.log(result.next().value)
console.log(result.next().value)
console.log(result.next().value)
console.log(result.next().value)