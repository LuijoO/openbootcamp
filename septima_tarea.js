const familia = ["Daniel", "Maria", "Javier", "Alejandra", "Alberto", "Luis"];

// ----------------------------------------------------------------------------
//Nuevo SET con los nombres de mi familia. 
const newFamily = new Set(familia);
console.log(newFamily)


// ----------------------------------------------------------------------------
//MODIFICACION DEL SET ORIGINAL DUPLICANDO MI NOMBRE. 
newFamily.add("Luis");
console.log(newFamily)



// ----------------------------------------------------------------------------
//MODIFICACION DEL SET ORIGINAL AGREGANDO JAVASCRIPT. 
newFamily.add("JavaScript");
console.log(newFamily)