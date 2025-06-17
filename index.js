//FUNCION DE NUMERO 0 HASTA EL NUMERO DESEADO (N)

function serieNumeros (n) {
  if (n >= 0) {
    for(let i=0; i <= n; i++){
      console.log(i);
    }
  } else {
    for(let i=0; i >= n; i--){
       console.log(i);
    }
  }
}
serieNumeros(7);


//FUNCION DE SERIE FIBONACCI (no la explico por que me da pereza)

function serieFi (n) {
  let a = 0
  let b = 1
  let agrupacionFi = [];
  
  for(let i=0; i<n; i++) {
    agrupacionFi.push(a);
    let z = a+b;
     a = b;
     b = z;
  }
  console.log(agrupacionFi.join(" , "));  
  }

serieFi (30);

function serieNumeros3En3 (n) {
  let serieCompleta = "";
  if (n >= 0) {
    for(let i = 0; i <= n; i += 3) {
      serieCompleta += i + " / ";
    }
  } else {
    for(let i = 0; i >= n; i += -3) {
      serieCompleta += i + " / "
    }
  }
  console.log(serieCompleta)
}
serieNumeros3En3 (-100);

//FUNCION DE ARRAY CON FUNCIONES SECUNDARIAS

//Esta funcion tendra una lista de los presidentes mas relevantes de Colombia, pero puede ser actualizada incluyendo el nuevo presidente

function presidentesDeColombia(listaPresidentes, nuevoPresidente) {
 //let lista = listaPresidentes.slice();
 // lista += ", " + nuevoPresidente;

//  let listaActualizada = lista.split(", "); 
 listaPresidentes.push(nuevoPresidente);
  
  console.log(listaPresidentes)
}

let listaPresidentes =
        ["José Miguel Pey y Andrade",
        "Jorge Tadeo Lozano",
        "Antonio Nariño",
        "Camilo Torres",
        "José Fernández Madrid",
        "José Joaquín Camacho",
        "Simón Bolívar",
        "Francisco de Paula Santander",
        "Carlos Holguín",
        "Aquileo Parra",
        "Eustorgio Salgar",
        "Manuel Murillo Toro",
        "Santiago Pérez",
        "Julio César Turbay",
        "Belisario Betancur",
        "Alfonso López Michelsen",
        "Ernesto Samper",
        "César Gaviria",
        "Andrés Pastrana",
        "Álvaro Uribe",
        "Juan Manuel Santos",
        "Iván Duque"]

presidentesDeColombia(listaPresidentes, "Gustavo Petro");
console.log(listaPresidentes);

//FUNCIONES CON FILTER

//Funcion que muestra los dias de fin de semana

const diasSemana = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
];

let finSemana = diasSemana.filter(
  (dias, diasFinales) => diasFinales === 5 || diasFinales === 6
);

console.log(finSemana);

//Funcion que filtra las canciones por autor

let songs = [
  {songName:"This Fire", autor:"Franz Ferdinand"},
  {songName:"Teddy Picker", autor:"Artic Monkeys"},
  {songName:"Feel It", autor:"d4vd"},
  {songName:"My Propeller", autor:"Artic Monkeys"},
  {songName:"Evil Eye", autor:"Franz Ferdinand"},
  {songName:"I Really Want to Stay at Your House", autor:"Rosa Walton"},
];
//SI SE QUIERE HACER CON ARROW FUNCTION SERIA DE LA SIGUIENTE MANERA:
//(eleccion => eleccion.autor === "Rosa Walton";
let autorPreferido = songs.filter(function(song) {
    return song.autor === "d4vd";
  });
let i = autorPreferido.length;
   if(i > 0) {
     console.log(autorPreferido)
   } else {
      console.log("No se encontro material de este autor")}

//Funcion que dice que personas de la lista ya pueden trabajar como Uber

let aspirantes = [
  {name:"Clara", age:"24", cedula:true},
  {name:"Daniela", age:"19", cedula:false},
  {name:"Mateo", age:"17", cedula:false},
  {name:"Jonh", age:"31", cedula:true},
  {name:"Michel", age:"18", cedula:true},
];

let contratados = aspirantes.filter(function(persona) {
  return persona.age >= 18 && persona.cedula == true;
});

let nombresContratados = contratados.map(function(trabajador) {
  return trabajador.name;
});

let noContratados = aspirantes.filter(function(persona) {
  return persona.age <= 18 && persona.cedula == false || persona.age >= 18 && persona.cedula == false;
});

let nombresNoContratados = noContratados.map(function(noTrabajador) {
  return noTrabajador.name;
});

console.log(nombresContratados);
console.log(nombresNoContratados);