//!FUNCION DE CLIMA Y PRONOSTICO DE LLUVIA DE 10 CIUDADES DE COLOMBIA.

// ? Array de ciudades de Colombia con su temperatura promedio y probabilidad de lluvia.

console.log("Estas son las ciudades antes del cambio de temperatura:");

let ciudades = [
    { cityName: "Bogotá", temperature: 17, rainProbablity: true },
    { cityName: "Cali", temperature: 28, rainProbablity: false },
    { cityName: "Fusagasugá", temperature: 19, rainProbablity: false },
    { cityName: "Ibagué", temperature: 25, rainProbablity: true },
    { cityName: "Manizales", temperature: 24, rainProbablity: true },
    { cityName: "Neiva", temperature: 32, rainProbablity: true },
    { cityName: "Bucaramanga", temperature: 22, rainProbablity: false },
    { cityName: "Barranquilla", temperature: 32, rainProbablity: false },
    { cityName: "Cartagena", temperature: 31, rainProbablity: true },
    { cityName: "Pasto", temperature: 20, rainProbablity: false },
];

console.log(ciudades);

// ? El .map utilizandolo para randomizar los cambios de temperatura.

let filtrarTemperatura = ciudades.map(function (ciudad) {
    let cambios = [-2, -1, 1, 2];
    let randomCambio = Math.floor(Math.random() * 4);
    let cambio = cambios[randomCambio];
    return { ...ciudad, temperature: ciudad.temperature + cambio };
});

console.log("Estas son las ciudades despues del cambio de temperatura:");

// ? Aqui ya se encuentra el console.log de las ciudades con su clima cambiado.

console.log(filtrarTemperatura);

// ! FUNCION QUE CAMBIE EL CLIMA DE SOLO UNA CIUDAD EN ESPECIFICO.

function actualizarClimaCiudad(ciudadFiltrada) {
    return ciudades.map(function (tempCiudad) {
        if (tempCiudad.cityName == ciudadFiltrada) {
            let cambioPorCiudad = [-2, -1, 1, 2];
            let randCambioCiudad = Math.floor(Math.random() * 4);
            let cambioCiudad = cambioPorCiudad[randCambioCiudad];
            return { ...tempCiudad, temperature: tempCiudad.temperature + cambioCiudad };
        } else {
            return tempCiudad
        };
    });
};
let cambioCompleto = actualizarClimaCiudad("Bogotá");

console.log("Este es el array de ciudades con la temperatura de una sola ciudad:")

// ? Aqui se encuentra el console.log de la funcion que cambio la temperatura de solo una ciudad del array

console.log(cambioCompleto);
