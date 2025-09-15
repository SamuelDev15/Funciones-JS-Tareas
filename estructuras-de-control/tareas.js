//! FUNCION DE TABLAS DE MULTIPLICAR DE EL 1 AL 10

//? Array donde se pondran las tablas de multiplicar

let tablas = [];

//? Funcion de multimplicacion

function multiplicacion(a, b) {
    return a * b
};

function crearTodas() {
    for (let n = 1; n <= 10; n++) {
        let soloUnaTabla = [];
        for (i = 1; i <= 10; i++) {
            soloUnaTabla.push(n + " X " + i + " = " + multiplicacion(n, i))
        }
        tablas.push(soloUnaTabla);
    }
};

crearTodas();
console.log("Estas son las tablas de multiplicar completas")
console.log(tablas);

//! FUNCION DE DOS ARRAYS QUE SE SUMAN POR POSICIONES CON UN FOR CON VALIDACIONES PARA PODER AGREGAR MAS NUMEROS A LOS ARRAYS

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
    6,
    3
];

//? Segundo array de numeros

let num2 = [
    5,
    2,
    8,
    3
];

//? Array donde se digitaran los resultados de la suma

let resultadoSuma = [];

//? Array de explicacion de los resultados

let resultado = [];

//? variable ligada a la biblioteca Math para almacenar de manera correcta el length de ambos arrays sin necesidad de recorrerlos todos cada vez en el FOR

let maximoTamaño = Math.max(num1.length, num2.length)

//? FOR de control para que sume por posicion de los arrays

for (let i = 0; i < maximoTamaño; i++) {

    let valor1 = num1[i] || 0;
    let valor2 = num2[i] || 0;

    resultadoSuma.push((suma(valor1, valor2)));
    resultado.push("El resultado de la suma de " + valor1 + " + " + valor2 + " = " + resultadoSuma[i])
};

console.log(resultadoSuma);
console.log(resultado);

//! EJEMPLOS DE PRECEDENCIAS EN JS

let arrayDePrecedencias = [];

function hacerPrecedencias(lasPrecedencias) {
    console.log("El resultado de esta precedencia es de " + lasPrecedencias)
}

hacerPrecedencias(17 + 5 / 1 + 5 * 7);
hacerPrecedencias(9 - 17 / (21 * 7));
hacerPrecedencias((18 - 5 * 2) + (62 + 4 - 56));
hacerPrecedencias(21 + 14 - 8 * (1 - 4));
hacerPrecedencias(69 * 5 / 40 - (123 - 98));
hacerPrecedencias((77 / 2) + 45 * 3 / 1);
hacerPrecedencias(84 + 31 / 34 * 0 + 1);
hacerPrecedencias(589 - 473 / (841 / 21 - 30) + 1005);

/* IFS CON MAS DE 3 CONDICIONES

let pasoLosExamenes = true;
let  = true;
let pasoLosExamenes = true;
let pasoLosExamenes = true;
let pasoLosExamenes = true;
let pasoLosExamenes = true;
let pasoLosExamenes = true;
let pasoLosExamenes = true;
let pasoLosExamenes = true;
let pasoLosExamenes = true;
let pasoLosExamenes = true;
let pasoLosExamenes = true;
let pasoLosExamenes = true;
let pasoLosExamenes = true;
let pasoLosExamenes = true; */

//! TRIKI EN DIAGONAL

let TrikiEnDiagonal = [
    ["X", "0", "X"],
    ["X", "X", "0"],
    ["0", "0", "0"]
];

let nuevoTrikiEnDiagonal = [];

for (let i = 0; i < TrikiEnDiagonal.length; i++) {
    nuevoTrikiEnDiagonal[i] = [];
    for (let j = 0; j < TrikiEnDiagonal.length; j++) {
        nuevoTrikiEnDiagonal[i][j] = "0";
    }
};

nuevoTrikiEnDiagonal[0][0] = "X";
nuevoTrikiEnDiagonal[1][1] = "X";
nuevoTrikiEnDiagonal[2][2] = "X";

console.log("Este es el triki con sus valores originales");
console.log(TrikiEnDiagonal);

console.log("Este es el triki con sus valores cambiados en diagonal");
console.log(nuevoTrikiEnDiagonal);

//! SUDOKU

let sudoku = [
    ["2", "3", "5"],
    ["8", "7", "1"],
    ["4", "9", "6"]
];

let sudokuOrganizado = [];

for (let i = 0; i < sudoku.length; i++) {
    for (let j = 9; j > sudoku.length; j--) {
        for (let y = 10; y > j; y--) {
            if (i < j) {
                sudokuOrganizado[]
            }
        }
    }
};

console.log("Este es el sudoku con sus valores originales desorganizados");
console.log(sudoku);


console.log("Este es el sudoku organizado de manera correcta");
console.log(sudokuOrganizado);