// //! AQUI VAMOS A HACER EL FETCH SOBRE LAS CARACTERISTICAS DE EL AUTO DEL CORREDOR ESCOGIDO

document.addEventListener("DOMContentLoaded", function () {
    infoF1();
    infoCarsF1();
});

function infoF1() {
    const params = new URLSearchParams(window.location.search);
    const driverNumber = params.get("driver_number");
    const sessionKey = params.get("session_key");

    const urlBase = "https://api.openf1.org/v1/";
    const endpoints = "drivers";
    const url = urlBase + endpoints + "?driver_number=" + driverNumber + "&session_key=" + sessionKey;

    fetch(url)
        .then(function (respuesta) {
            return respuesta.json();
        })
        .then(function (drivers) {
            if (Array.isArray(drivers)) {
                for (var i = 0; i < drivers.length; i++) {
                    var d = drivers[i];
                    if (d && d.headshot_url) {
                        var driverImg = "<img src='" + d.headshot_url + "' alt='" + (d.full_name || '') + "' />";
                        document.getElementById("imgCorredor").innerHTML += driverImg;
                        break;
                    }
                }
            }
        })
};

function infoCarsF1() {
    const params = new URLSearchParams(window.location.search);
    const driverNumber = params.get("driver_number");
    const sessionKey = params.get("session_key");

    const urlBase = "https://api.openf1.org/v1/";
    const endpoints = "car_data";
    const url = urlBase + endpoints +
        "?driver_number=" + driverNumber +
        "&session_key=" + sessionKey +
        "&speed=315";

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (car) {
            if (Array.isArray(car)) {
                for (var i = 0; i < car.length; i++) {
                    var f1Car = car[i];
                    var newNames = {
                        numeroDeCorredor: f1Car.driver_number,
                        sistemaReduccionArrastre: f1Car.drs,
                        revolucionesPorMinuto: f1Car.rpm,
                        freno: f1Car.brake,
                        velocidad: f1Car.speed,
                        acelerador: f1Car.throttle
                    };
                    renderDetailF1(newNames);
                }
            };
            renderDetailF1(newNamesSingle);
        })
};

function renderDetailF1(car) {
    var list = document.getElementById("carDetails");
    var card = "<li>";
    for (var key in car) {
        var value = car[key];
        card += "<span id='driverCard'>" + key + ": " + value + "<br></span>";
    }
    card += "</li>";
    list.innerHTML += card;
};
