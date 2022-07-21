// --------------------------------------------------------------------
//Creacion de un objeto con mis datos personales.
const miYo = [{
  nombre: "Luis Jose",
  apellido: "Hernandez",
  edad: 35,
  altura: 1.70,
  eresDsarrollador: true
}]


// --------------------------------------------------------------------
//Creacion de una variable que traiga del objeto principal mi edad.
const miEdad = miYo.edad;
console.log(miEdad);


// --------------------------------------------------------------------
//Creacion de un objeto con mis datos personales.
const bestFrnd = [{
    nombre: "Daniel",
    apellido: "de Hernandez",
    edad: 27,
    altura: 1.60,
    eresDesarrollador: true
  }, 
{
    nombre: "Duarte",
    apellido: "Fernandes",
    edad: 32,
    altura: 1.80,
    eresDesarrollador: true
  }
]

const todos = [...miYo, ...bestFrnd]
const ordenada = todos.sort((a, b) => {
  return b.edad - a.edad 
})
console.log(ordenada)

