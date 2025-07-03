//! EJEMPLOS DE USO DE IF ELSE

//? IF y ELSE sobre si es fin de semana o no:

let finSemana = true;

console.log("Este es el if else sobre si es fin de semana o no:");

if (finSemana) {
    console.log("Estamos en fin se semana")
} else {
    console.log("Estamos en los dias de la semana")
};

//? IF y ELSE sonbre si hay cupo para mas estudiantes en el aula o no:

let estudiantesDelAula = 25;

console.log("Este es el if else sobre si hay cupo o no en el aula de un colegio:");

if (estudiantesDelAula >= 30) {
    console.log("En este aula no hay espacio para mas estudiantes")
} else {
    console.log("En este aula hay cupo para cinco estudiantes mas")
};

//! EJEMPLOS DE USO DE FOR ACCEDIENDO A UN ARRAY POR POSICION
//* Con nombres de Teletubiies jeje :D

let nombresTeletubbies = [
    "Tinky Winky",
    "Dipsy",
    "Laa-Laa",
    "Po",
];

for (i = 0; i <= 3; i++) {
    console.log(nombresTeletubbies[i])
};

//! FUNCION DE DOS ARRAYS QUE SE SUMAN POR POSICIONES CON UN FOR

//? Funcion de suma

function suma(a, b) {
    return a + b
};

//? Primer array de numeros

let num1 = [
    7,
    4,
    9,
    1,
];

//? Segundo array de numeros

let num2 = [
    5,
    2,
    8,
    3,
];

//? Array donde se digitaran los resultados de la suma

let resultadoSuma = [];

//? Array de explicacion de los resultados

let resultado = [];

//? FOR de control para que sume por posicion de los arrays

for (i = 0; i < 4; i++) {
    resultadoSuma.push((suma(num1[i], num2[i])));
    resultado.push("El resultado de la suma de " + num1[i] + " + " + num2[i] + " = " + resultadoSuma[i])
};

console.log(resultadoSuma);
console.log(resultado);