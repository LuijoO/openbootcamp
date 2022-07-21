//Lista variable que contiene 5 elementos
const compra = [
  "Agua",
  "Sal",
  "Azucar",
  "Harina",
  "Levadura"
];

// ----------------------------------------------------------------------------------
//MODIFICADA PARA INCLUIR "ACEITE DE GIRASOL"
const compraConAceite = compra.push("Aceite de Girasol");
console.log(compra);

//MODIFICADA PARA ELIMIAR EL ACEITE DE GIRASOL.
const compraSinAceite = compra.pop();
console.log(compra);

// ----------------------------------------------------------------------------------
//LISTA DE MIS TRES PELICULAS FAVORITAS (objetos)
const favs = [
  {
    titulo: "Harry Potter",
    director: "David Yates",
    fecha: 2009
  },
  {
    titulo: "Call me by your name",
    director: "Luca Guadagnino",
    fecha: 2017
  },
  {
    titulo: "Avengers",
    director: "Russo Brothers",
    fecha: 2012
  }
];
console.log(favs)


// ----------------------------------------------------------------------------------
//NUEVA LISTA QUE CONTIENE TODAS LAS PELICULAS POSTERIORES AL 2010
const antiguas = favs.filter(obj => {
  if(obj.fecha < 2010) {
    return true
  } else {
    return false
  }
}) 

console.log(antiguas);

// ----------------------------------------------------------------------------------
// LISTA CON LOS NOMBRES DE LOS DIRECTORES DE LA LISTA ORIGINAL (MAP)
const directores = favs.map((obj) => {
  return `${obj.director}`
})

console.log(directores)

// ----------------------------------------------------------------------------------
// NUEVA LISTA, CONTIENE LOS NOMBRES DE LAS PELICULAS DE LA LISTA ORIGINAL (MAP)
const titulos = favs.map((obj) => {
  return `${obj.titulo}`
})

console.log(titulos);

// ----------------------------------------------------------------------------------
// NUEVA LISTA, CONCATENA LAS DOS LISTAS ANTERIORE (CONCAT)
const newListConcat = directores.concat(titulos)

console.log(newListConcat)

// ----------------------------------------------------------------------------------
// NUEVA LISTA, CONCATENA LAS DOS LISTAS ANTERIORE (METODO DE PROPAGACION)
const listaPropagacion = [...titulos,...directores];
console.log(listaPropagacion)
