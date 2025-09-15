//! UTILIZAR API DE NUESTRA PREFERENCIA E IMPRIMIR LA INFORMCAION EN HTML

function cargarSesiones() {
    const urlBase = "https://api.openf1.org/v1/";
    const endpoints = "sessions";
    const filter = "?year=2025";
    const url = urlBase + endpoints + filter;

    fetch(url)
        .then(function (respuesta) {
            return respuesta.json();
        })
        .then(function (sesiones) {
            var selector = document.getElementById("selectorF1");

            var primera = document.createElement("option");
            primera.value = "";
            primera.textContent = "Seleccione una sesión";
            selector.appendChild(primera);

            sesiones.forEach(function (s) {
                var option = document.createElement("option");
                option.value = s.session_key;
                option.textContent = s.year + " - " + s.session_name + " (" + (s.circuit_short_name || "") + ")";
                selector.appendChild(option);
            });
        })
}

function infoF1(sessionKey) {
    const urlBase = "https://api.openf1.org/v1/";
    const endpoints = "drivers";
    const filter = "?session_key=" + (sessionKey || "latest");
    const url = urlBase + endpoints + filter;

    document.getElementById("drivers-list").innerHTML = "";

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (f1) {
            f1.map(function mapeoJson(driver) {
                var newKey = {
                    numeroDeCorredor: driver.driver_number,
                    enTransmision: driver.broadcast_name,
                    nombre: driver.full_name,
                    nombreAcronimo: driver.name_acronym,
                    equipo: driver.team_name,
                    colorDelEquipo: driver.team_colour,
                    foto: driver.headshot_url,
                }
                pintarKeyF1(newKey);
            })
        })
};


function pintarKeyF1(driver) {
    let card = "<div class='driver-card' onclick='carsDetailsF1(" + driver.numeroDeCorredor + ")'>";

    if (driver.foto) {
        card += "<img src='" + driver.foto + "' alt='" + driver.nombre + "'>";
    }

    for (const key in driver) {
        if (key !== "foto") {
            card += "<p>" + key + ": " + driver[key] + "</p>";
        }
    }

    card += "</div>";

    document.getElementById("drivers-list").innerHTML += card;
}

//! AHORA REDIRECCIONAREMOS A OTRO HTML PARA DAR INFORMACION SOBRE LOS VEHICULOS DE CADA CORREDOR

function carsDetailsF1(driverNumber) {
    var sessionKey = document.getElementById("selectorF1").value || "latest";
    window.location.href = "cars.html?driver_number=" + driverNumber + "&session_key=" + sessionKey;
}

cargarSesiones();
infoF1();

document.getElementById("selectorF1").addEventListener("change", function () {
    infoF1(this.value);
});
