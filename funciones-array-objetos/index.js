//! FUNCION ARRAY DE PERSONAJES DE FICCION ORDENADOS ALFABETICAMENTE

//? Este es el array de personajes de la ficcion:

let personajesFiccion = [
    "Flash",
    "Hulk",
    "Conquest",
    "Ant-Man",
    "Guts",
    "Burpy",
    "Radiance",
    "Omni Man",
    "Kakashi",
    "Martian Manhunter",
    "Puck",
    "Skulk Knight",
];
console.log("Este es el array de personajes de ficcion:");
console.log(personajesFiccion);

//? Este es el array de personajes de ficcion ordenado de manera ascendente:

let ordenados = personajesFiccion.toSorted();

console.log("Este es el array de personajes de ficcion pero ordenados alfabeticamente:");
console.log(ordenados);

//? Este es el array de personajes de ficcion ordenado de manera descendente:

let ordenadosAlReves = ordenados.toReversed();

console.log("Este es el array de personajes de ficcion pero ordenados alfabeticamente pero en forma descendente:");
console.log(ordenadosAlReves);


//! FUNCION PARA ORGANIZAR OBJETOS DE PERSONA (INCLUYE NOMBRE, APELLIDO Y EDAD)

let personas = [
    { nombre: "Raul", apellido: "Perez", edad: 21 },
    { nombre: "Juan", apellido: "Nautilo", edad: 41 },
    { nombre: "Andres", apellido: "Betacio", edad: 33 },
    { nombre: "Yesica", apellido: "Tomate", edad: 12 },
    { nombre: "Diana", apellido: "Castillo", edad: 48 },
    { nombre: "Estefania", apellido: "Fernandez", edad: 61 },
];

console.log("Este es el array de personas:");
console.log(personas);

//? Este es el array de personas ordenado alfabeticamente de manera ascendente:

function ordenarNombres(a, b) {
    return a.nombre.localeCompare(b.nombre)
};

let arrayOrdenado = personas.toSorted(ordenarNombres);

let arrayAlReves = arrayOrdenado.toReversed();

//* ORDENADOS EN FORMA ASCENDENTE
console.log("Este es el array de personas organizado en orden alfabetico de forma ascendente:");
console.log(arrayOrdenado);

//* ORDENADOS EN FORMA DESCENDENTE
console.log("Este es el array de personas organizado en orden alfabetico de forma descendente:")
console.log(arrayAlReves)

//! FUNCION QUE AGREGARA UNA CARACTERIZTICA DE ESTATURA A LOS OBJETOS DEL ANTERIOR ARRAY Y LA RANDOMIFICARA EN UN RANGO DE 30-200

function estaturaAleatoria() {
    return Math.floor(Math.random() * (200 - 30 + 1)) + 30
};

function agregarEstatura() {
    let estaturaEnElArray = personas.map(function (persona) {
        return { ...persona, estatura: estaturaAleatoria() }
    });
    return estaturaEnElArray;
};
let nuevaPropiedad = agregarEstatura();

console.log("Aqui se le agrega una nueva propiedad al array de personas:");
console.log(nuevaPropiedad);

//! FUNCION QUE AGREGA UNA NUEVA CARACTERIZTICA DE RESUMEN AL ARRAY

let resumenDePersona = nuevaPropiedad.map(function (personaArray) {
    let resumen = "Mi nombre es " + personaArray.nombre +
        " de apellido " + personaArray.apellido +
        ", mi edad es " + personaArray.edad +
        " y mi estatura es de " + personaArray.estatura + "cm";
    return { ...personaArray, resumen: resumen };
});

console.log("Aqui esta el array con una nueva propiedad en los objetos llamada resumen:");
console.log(resumenDePersona);
