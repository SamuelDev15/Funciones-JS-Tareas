document.addEventListener("DOMContentLoaded", function boostrap() {

  //! METODOS DE ARRAYS Y OBJETOS

  const equipos = [
    {
      id: 1,
      nombreEquipo: "Colombia",
      jugadores: [
        {
          numero: 1,
          nombre: "David Ospina",
          posicion: "Portero",
        },
        {
          numero: 3,
          nombre: "Jhon Lucumí",
          posicion: "Defensa central",
        },
        {
          numero: 10,
          nombre: "James Rodríguez",
          posicion: "Mediocampista ofensivo",
        },
        {
          numero: 7,
          nombre: "Luis Díaz",
          posicion: "Defensa Izquierda",
        },
        {
          numero: 24,
          nombre: "Jhon Córdoba",
          posicion: "Delantero centro",
        },
      ],
    },

    {
      id: 2,
      nombreEquipo: "España",
      jugadores: [
        {
          numero: 1,
          nombre: "David Raya",
          posicion: "Portero",
        },
        {
          numero: 4,
          nombre: "Pau Torres",
          posicion: "Defensa central",
        },
        {
          numero: 8,
          nombre: "Pedri",
          posicion: "Mediocampista creativo",
        },
        {
          numero: 7,
          nombre: "Lamine Yamal",
          posicion: "Defensa Derecha",
        },
        {
          numero: 19,
          nombre: "Álvaro Morata",
          posicion: "Delantero centro",
        },
      ],
    },
  ];

  const equiposPush = [
    {
      id: 1,
      nombreEquipo: "Colombia",
      jugadores: [
        {
          numero: 1,
          nombre: "David Ospina",
          posicion: "Portero",
        },
        {
          numero: 3,
          nombre: "Jhon Lucumí",
          posicion: "Defensa central",
        },
        {
          numero: 10,
          nombre: "James Rodríguez",
          posicion: "Mediocampista ofensivo",
        },
        {
          numero: 7,
          nombre: "Luis Díaz",
          posicion: "Defensa Izquierda",
        },
        {
          numero: 24,
          nombre: "Jhon Córdoba",
          posicion: "Delantero centro",
        },
      ],
    },

    {
      id: 2,
      nombreEquipo: "España",
      jugadores: [
        {
          numero: 1,
          nombre: "David Raya",
          posicion: "Portero",
        },
        {
          numero: 4,
          nombre: "Pau Torres",
          posicion: "Defensa central",
        },
        {
          numero: 8,
          nombre: "Pedri",
          posicion: "Mediocampista creativo",
        },
        {
          numero: 7,
          nombre: "Lamine Yamal",
          posicion: "Defensa Derecha",
        },
        {
          numero: 19,
          nombre: "Álvaro Morata",
          posicion: "Delantero centro",
        },
      ],
    },
  ];

  const equiposPop = [
    {
      id: 1,
      nombreEquipo: "Colombia",
      jugadores: [
        {
          numero: 1,
          nombre: "David Ospina",
          posicion: "Portero",
        },
        {
          numero: 3,
          nombre: "Jhon Lucumí",
          posicion: "Defensa central",
        },
        {
          numero: 10,
          nombre: "James Rodríguez",
          posicion: "Mediocampista ofensivo",
        },
        {
          numero: 7,
          nombre: "Luis Díaz",
          posicion: "Defensa Izquierda",
        },
        {
          numero: 24,
          nombre: "Jhon Córdoba",
          posicion: "Delantero centro",
        },
      ],
    },

    {
      id: 2,
      nombreEquipo: "España",
      jugadores: [
        {
          numero: 1,
          nombre: "David Raya",
          posicion: "Portero",
        },
        {
          numero: 4,
          nombre: "Pau Torres",
          posicion: "Defensa central",
        },
        {
          numero: 8,
          nombre: "Pedri",
          posicion: "Mediocampista creativo",
        },
        {
          numero: 7,
          nombre: "Lamine Yamal",
          posicion: "Defensa Derecha",
        },
        {
          numero: 19,
          nombre: "Álvaro Morata",
          posicion: "Delantero centro",
        },
      ],
    },
  ];

  const equiposShift = [
    {
      id: 1,
      nombreEquipo: "Colombia",
      jugadores: [
        {
          numero: 1,
          nombre: "David Ospina",
          posicion: "Portero",
        },
        {
          numero: 3,
          nombre: "Jhon Lucumí",
          posicion: "Defensa central",
        },
        {
          numero: 10,
          nombre: "James Rodríguez",
          posicion: "Mediocampista ofensivo",
        },
        {
          numero: 7,
          nombre: "Luis Díaz",
          posicion: "Defensa Izquierda",
        },
        {
          numero: 24,
          nombre: "Jhon Córdoba",
          posicion: "Delantero centro",
        },
      ],
    },

    {
      id: 2,
      nombreEquipo: "España",
      jugadores: [
        {
          numero: 1,
          nombre: "David Raya",
          posicion: "Portero",
        },
        {
          numero: 4,
          nombre: "Pau Torres",
          posicion: "Defensa central",
        },
        {
          numero: 8,
          nombre: "Pedri",
          posicion: "Mediocampista creativo",
        },
        {
          numero: 7,
          nombre: "Lamine Yamal",
          posicion: "Defensa Derecha",
        },
        {
          numero: 19,
          nombre: "Álvaro Morata",
          posicion: "Delantero centro",
        },
      ],
    },
  ];

  const equiposUnshift = [
    {
      id: 1,
      nombreEquipo: "Colombia",
      jugadores: [
        {
          numero: 1,
          nombre: "David Ospina",
          posicion: "Portero",
        },
        {
          numero: 3,
          nombre: "Jhon Lucumí",
          posicion: "Defensa central",
        },
        {
          numero: 10,
          nombre: "James Rodríguez",
          posicion: "Mediocampista ofensivo",
        },
        {
          numero: 7,
          nombre: "Luis Díaz",
          posicion: "Defensa Izquierda",
        },
        {
          numero: 24,
          nombre: "Jhon Córdoba",
          posicion: "Delantero centro",
        },
      ],
    },

    {
      id: 2,
      nombreEquipo: "España",
      jugadores: [
        {
          numero: 1,
          nombre: "David Raya",
          posicion: "Portero",
        },
        {
          numero: 4,
          nombre: "Pau Torres",
          posicion: "Defensa central",
        },
        {
          numero: 8,
          nombre: "Pedri",
          posicion: "Mediocampista creativo",
        },
        {
          numero: 7,
          nombre: "Lamine Yamal",
          posicion: "Defensa Derecha",
        },
        {
          numero: 19,
          nombre: "Álvaro Morata",
          posicion: "Delantero centro",
        },
      ],
    },
  ];

  const nuevoEquipo =
  {
    id: 3,
    nombreEquipo: "Chile",
    jugadores: [
      {
        numero: 1,
        nombre: "Claudio Bravo",
        posicion: "Portero",
      },
      {
        numero: 8,
        nombre: "Arturo Vidal",
        posicion: "Mediocampista mixto",
      },
      {
        numero: 20,
        nombre: "Charles Aránguiz",
        posicion: "Mediocentro",
      },
      {
        numero: 10,
        nombre: "Alexis Sánchez",
        posicion: "Extremo / mediapunta",
      },
      {
        numero: 9,
        nombre: "Eduardo Vargas",
        posicion: "Delantero centro",
      },
    ],
  };

  function mostrarEquipos() {
    let mostrarEquipos = "<div>";

    equipos.forEach(function (equipos) {
      let contenedorEquipos = "<div>";

      for (const key in equipos) {

        const equipo = equipos[key];

        if (key !== "jugadores") {
          contenedorEquipos += "<h3>" + key + ": " + equipo + "</h3>";
        };

        if (key == "jugadores") {
          contenedorEquipos += "<h4>" + key + ": " + "</h4>";

          for (const key in equipo) {
            let contenedorJugadores = "<div>";
            const jugadores = equipo[key];

            for (const key in jugadores) {
              let contenedorJugador = "<div>";
              const jugador = jugadores[key];

              contenedorJugador += "<li>" + key + ": " + jugador + "</li>";
              contenedorJugador += "</div>";
              contenedorJugadores += contenedorJugador;
            };
            contenedorJugadores += "</div>"
            contenedorEquipos += contenedorJugadores + "<br>";
          };
        };
      };
      contenedorEquipos += "</div>";
      mostrarEquipos += contenedorEquipos;
    });

    mostrarEquipos += "</div>";


    document.getElementById("contenedor-equipos").innerHTML = mostrarEquipos;
  };

  function pushEquipo() {
    equiposPush.push(nuevoEquipo);
    let mostrarEquiposNuevos = "<div>";

    equiposPush.forEach(function (equipos) {
      let contenedorEquipos = "<div>";

      for (const key in equipos) {

        const equipo = equipos[key];

        if (key !== "jugadores") {
          contenedorEquipos += "<h3>" + key + ": " + equipo + "</h3>";
        };

        if (key == "jugadores") {
          contenedorEquipos += "<h4>" + key + ": " + "</h4>";

          for (const key in equipo) {
            let contenedorJugadores = "<div>";
            const jugadores = equipo[key];

            for (const key in jugadores) {
              let contenedorJugador = "<div>";
              const jugador = jugadores[key];

              contenedorJugador += "<li>" + key + ": " + jugador + "</li>";
              contenedorJugador += "</div>";
              contenedorJugadores += contenedorJugador;
            };
            contenedorJugadores += "</div>"
            contenedorEquipos += contenedorJugadores + "<br>";
          };
        };
      };
      contenedorEquipos += "</div>";
      mostrarEquiposNuevos += contenedorEquipos;
    });

    mostrarEquiposNuevos += "</div>";


    document.getElementById("contenedor-equiposPush").innerHTML = mostrarEquiposNuevos;
  };

  function PopEquipo() {
    equiposPop.pop();
    let mostrarEquiposNuevos = "<div>";

    equiposPop.forEach(function (equipos) {
      let contenedorEquipos = "<div>";

      for (const key in equipos) {

        const equipo = equipos[key];

        if (key !== "jugadores") {
          contenedorEquipos += "<h3>" + key + ": " + equipo + "</h3>";
        };

        if (key == "jugadores") {
          contenedorEquipos += "<h4>" + key + ": " + "</h4>";

          for (const key in equipo) {
            let contenedorJugadores = "<div>";
            const jugadores = equipo[key];

            for (const key in jugadores) {
              let contenedorJugador = "<div>";
              const jugador = jugadores[key];

              contenedorJugador += "<li>" + key + ": " + jugador + "</li>";
              contenedorJugador += "</div>";
              contenedorJugadores += contenedorJugador;
            };
            contenedorJugadores += "</div>"
            contenedorEquipos += contenedorJugadores + "<br>";
          };
        };
      };
      contenedorEquipos += "</div>";
      mostrarEquiposNuevos += contenedorEquipos;
    });

    mostrarEquiposNuevos += "</div>";


    document.getElementById("contenedor-equiposPop").innerHTML = mostrarEquiposNuevos;
  };

  function shiftEquipo() {
    equiposShift.shift();
    let mostrarEquiposNuevos = "<div>";

    equiposShift.forEach(function (equipos) {
      let contenedorEquipos = "<div>";

      for (const key in equipos) {

        const equipo = equipos[key];

        if (key !== "jugadores") {
          contenedorEquipos += "<h3>" + key + ": " + equipo + "</h3>";
        };

        if (key == "jugadores") {
          contenedorEquipos += "<h4>" + key + ": " + "</h4>";

          for (const key in equipo) {
            let contenedorJugadores = "<div>";
            const jugadores = equipo[key];

            for (const key in jugadores) {
              let contenedorJugador = "<div>";
              const jugador = jugadores[key];

              contenedorJugador += "<li>" + key + ": " + jugador + "</li>";
              contenedorJugador += "</div>";
              contenedorJugadores += contenedorJugador;
            };
            contenedorJugadores += "</div>"
            contenedorEquipos += contenedorJugadores + "<br>";
          };
        };
      };
      contenedorEquipos += "</div>";
      mostrarEquiposNuevos += contenedorEquipos;
    });

    mostrarEquiposNuevos += "</div>";


    document.getElementById("contenedor-equiposShift").innerHTML = mostrarEquiposNuevos;
  };

  function unshiftEquipo() {
    equiposUnshift.unshift(nuevoEquipo);
    let mostrarEquiposNuevos = "<div>";

    equiposUnshift.forEach(function (equipos) {
      let contenedorEquipos = "<div>";

      for (const key in equipos) {

        const equipo = equipos[key];

        if (key !== "jugadores") {
          contenedorEquipos += "<h3>" + key + ": " + equipo + "</h3>";
        };

        if (key == "jugadores") {
          contenedorEquipos += "<h4>" + key + ": " + "</h4>";

          for (const key in equipo) {
            let contenedorJugadores = "<div>";
            const jugadores = equipo[key];

            for (const key in jugadores) {
              let contenedorJugador = "<div>";
              const jugador = jugadores[key];

              contenedorJugador += "<li>" + key + ": " + jugador + "</li>";
              contenedorJugador += "</div>";
              contenedorJugadores += contenedorJugador;
            };
            contenedorJugadores += "</div>"
            contenedorEquipos += contenedorJugadores + "<br>";
          };
        };
      };
      contenedorEquipos += "</div>";
      mostrarEquiposNuevos += contenedorEquipos;
    });

    mostrarEquiposNuevos += "</div>";


    document.getElementById("contenedor-equiposUnshift").innerHTML = mostrarEquiposNuevos;
  };

  function filtrarPorteros() {
    let equiposFiltrados = "<div>";

    equipos.map(function (equipos) {
      let porteros = equipos.jugadores.filter(function (jugador) {
        return jugador.posicion == "Portero";
      });

      for (const key in porteros) {
        let porterosEquipos = "<div>";
        const portero = porteros[key];

        for (const key in portero) {
          const jugador = portero[key];
          porterosEquipos += "<li>" + key + ": " + jugador + "</li>";
        }
        equiposFiltrados += "<br>";
        equiposFiltrados += porterosEquipos;
      };
    });
    equiposFiltrados += "</div>"
    document.getElementById("contenedor-equiposFiltrados").innerHTML = equiposFiltrados;
  };

  filtrarPorteros();
  unshiftEquipo();
  shiftEquipo();
  PopEquipo();
  pushEquipo();
  mostrarEquipos();
});