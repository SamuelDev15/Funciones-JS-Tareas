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

for (let i = 0; i <= 3; i++) {
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
    1
];

//? Segundo array de numeros

let num2 = [
    5,
    2,
    8,
    3,
    1
];

//? Array donde se digitaran los resultados de la suma

let resultadoSuma = [];

//? Array de explicacion de los resultados

let resultado = [];

//? FOR de control para que sume por posicion de los arrays

for (let i = 0; i < num1.length; i++) {
    resultadoSuma.push((suma(num1[i], num2[i])));
    resultado.push("El resultado de la suma de " + num1[i] + " + " + num2[i] + " = " + resultadoSuma[i])
};

console.log(resultadoSuma);
console.log(resultado);

//! FUNCION DE TABLAS DE MULTIPLICAR DE EL 1 AL 10

//? Array donde se pondran las tablas de multiplicar

let tablas = [];

//? Funcion de multimplicacion

function multimplicacion(a, b) {
    return a * b
};

function crearTabla(n) {
    for (let i = 1; i <= 10; i++) {
        tablas.push(n + " X " + i + " = " + multimplicacion(n, i))
    }
};

crearTabla(9);
console.log("Esta es la tabla completa de el numero deseado")
console.log(tablas);

//! IMPRIMIR SOLO LOS TRES ULTIMOS NOMBRES DE CARROS DEL ARRAY

const cars = [
    ["BMW", "Volvo", "Saab"],
    ["Ford", "Fiat", "Audi"],
    ["Lambo", "Renault", "Honda"]
];

let text = "";
for (let i = 0; i < cars.length; i++) {
    for (let j = 0; j < cars.length; j++) {
        if (j = cars.length - 1) {
            text += " " + cars[i][j];
        }
    }
}

console.log("Estas son las marcas de carros que estan en la ultima columna del array:");
console.log(text);


//! IMPRIMIR TODAS LAS MARCAS DE CARROS EN EL ARRAY MENOS LAS DEL MEDIO

const marcas = [
    ["BMW", "Volvo", "Saab"],
    ["Ford", "Fiat", "Audi"],
    ["Lambo", "Renault", "Honda"]
];

let carros1 = "";
for (let i = 0; i < marcas.length; i++) {
    for (let j = 0; j < marcas.length; j++) {
        if (i == 0 || i == marcas.length - 1 || j == marcas.length - 1 || j == 0) {
            carros1 += " " + marcas[i][j] + "\t";
        } else {
            carros1 += "\t";
        }
    }
    carros1 += "\n";
}

console.log("Esta es la matriz de los carros ordenada como matriz:");
console.log(carros1);