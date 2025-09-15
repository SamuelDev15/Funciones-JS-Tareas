//! IMPRIMIR UN OBJETO EN FORMA DE STRING LO QUE DESEEMOS

let mangaBerserk = {
    autor: "Kentarō Miura",
    authorsbirthday: "11 de julio de 1966",
    authorsDeathDay: "6 de mayo de 2021",
    mangaName: "Berserk",
    protagonist: "Guts",
    protagonistYearsOld: "22",
    characters: ["Casca", "Isidro", "Farnese", "Puck", "Schierke", "Serpico", "Skull Knight", "Ivalera"],
    kingdom: "Midland",
    antagonist: {
        organizationName: "Hand Of God",
        leader: "Void",
        member1: "Slan",
        member2: "Ubik",
        member3: "Conrad",
        principalAntagonist: "Femto/Griffith",

        imprimirAntagonistas: function () {
            let lista = "";
            for (let l in this) {
                if (typeof this[l] !== "function") {
                    lista += l + ": " + this[l] + "</br>";
                }
            }
            return lista,
                lista += "____________________________"
        }
    },

    toString: function () {
        let print = "";
        for (let p in this) {
            if (typeof this[p] !== "function") {
                if (typeof this[p] === "object" && this[p].imprimirAntagonistas) {
                    print += p + ": <br>" + this[p].imprimirAntagonistas() + "<br>";
                } else {
                    print += p + ": " + this[p] + "</br>";
                }
            }
        }
        return print;
    },
};

let mangaData = mangaBerserk.toString();
document.getElementById("manga").innerHTML = mangaData;

//! UTILIZAR .ToSTRING PARA IMPRIMIR TRES OBJETOS DIFERENTES EN UN ARRAY

let ninjas = [

    Zane = {
        name: "Zane",
        elementalPower: "Hielo",
        origin: "Androide creado por el Dr. Julien",
        weapon: "Shurikens de Hielo"
    },

    Lloyd = {
        name: "Lloyd",
        elementalPower: "Energia",
        origin: "Mitad Oni, por ser hijo de Lord Garmandon",
        weapon: "No cuenta con un arma fisica"
    },

    Jay = {
        name: "Jay",
        elementalPower: "Rayo",
        origin: "Hijo de Cliff Gordon y Libber Gordon, pero adoptado y criado por Ed y Edna Walker",
        weapon: "Nunchakus del Rayo"
    }
];

ninjas.forEach(function (personaje) {
    personaje.toString = function () {
        let favoritos = "";
        for (let f in this) {
            if (typeof this[f] !== "function") {
                favoritos += f + ": " + this[f] + "</br>";
            }
        }
        return favoritos
    }
});

let ninjasFavoritos = ninjas.toString();
document.getElementById("ninjagoFavoritos").innerHTML = ninjasFavoritos;