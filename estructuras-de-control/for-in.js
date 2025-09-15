//! UTILIZAR EL FOR IN PARA RECORRER LAS PROPIEDADES DE UN OBJETO E IMPRIMIRLOS EN EL HTML

let miCelular = {
    modelo: "Samsung Galaxy A15",
    tipoPantalla: "Super Amoled de 6.5 pulgadas",
    alturamm: 160.1,
    anchuramm: 76.8,
    resistenciaIP: "IP67"
};

let resumenMiCelular = "";

for (let x in miCelular) {
    resumenMiCelular += x.charAt().toUpperCase() + x.slice(1) + " : " + miCelular[x] + "<br>";
};

document.getElementById("caracteristicas").innerHTML = resumenMiCelular;

//! UTILZAR UN FOR LOOP ANIDADO CON UN FOOR IN PARA RECORRER UN ARRAY DE CELULARES PARA IMPRIMIR TODAS SUS PROPIEDADES

let celulares = [
    {
        modelo: "Samsung Galaxy A15",
        tipoPantalla: "Super AMOLED de 6.5 pulgadas",
        alturamm: 160.1,
        anchuramm: 76.8,
        resistenciaIP: "IP67"
    },

    {
        modelo: "Nubia Redmagic 10 Pro",
        tipoPantalla: "AMOLED de. 6,85 pulgadas",
        alturamm: 163.42,
        anchuramm: 76.14,
        resistenciaIP: "IP54"
    },

    {
        modelo: "Xiaomi 14t Pro",
        tipoPantalla: "AMOLED de 6.67 pulgadas",
        alturamm: 160.4,
        anchuramm: 75.1,
        resistenciaIP: "IP68"
    }
];

let todosLosCelulares = "";

for (let i = 0; i < celulares.length; i++) {
    let todos = celulares[i];
    for (let x in todos) {
        todosLosCelulares += x.charAt().toUpperCase() + x.slice(1) + " : " + todos[x] + "<br>";
    };

    todosLosCelulares += "_______________________" + "<br>";
};

document.getElementById("losCelulares").innerHTML = todosLosCelulares;