let nombre = "Luis"
console.log(nombre)
// ---------------------------------------------------------------
let apellido = "Hernandez"
console.log(apellido)

// ---------------------------------------------------------------
let estudiante = `${nombre} ${apellido}`
console.log(estudiante)

// ----------------------------------------------------------------
let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus)

// ----------------------------------------------------------------
let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus)

// ----------------------------------------------------------------
let cantidad = estudiante.length;
console.log(cantidad)

// ---------------------------------------------------------------
let first_of_name = nombre[0];
console.log(first_of_name)

// ----------------------------------------------------------------
let apellidoCant = apellido.length;
console.log(apellidoCant)
let last_of_apellido = apellido[8]
console.log(last_of_apellido)

// ---------------------------------------------------------------
let noSpaces = estudiante.replace(" ", "");
console.log(noSpaces)

// -------------------------------------------------------------
let contieneName = estudiante.includes(nombre);
console.log(contieneName)