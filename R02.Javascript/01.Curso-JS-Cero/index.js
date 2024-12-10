console.log("hola mundo");
let cajaDeAndy = "Woody";
console.log(cajaDeAndy);
let c = "Woody";
let cda = "Woody";
let pcAndy = "Woody";
let primerTrasteoDeAndy = "Woody";
let urlDelUsuario = "https://www.google.com";
let idDelUsuario = "123456789";

// Tipo de dato primitivo - Inmutable
let numero = 23;
numero = numero + 10;
console.log(numero);

let esVerdadero = true;
esVerdadero = false;
console.log(esVerdadero);

// Tipo de dato complejo - Mutable
let usuario = { nombre: "Pepito", edad: 15 };
usuario.edad = 20;
console.log(usuario);

let frutas = ["manzana", "pera"];
frutas[0] = "sandia";
console.log(frutas);

function cambiarNombre(objeto) {
    objeto.nombre = "Nuevo nombre";
}

let persona = { nombre: "Antonio" };
cambiarNombre(persona);

console.log(persona);
