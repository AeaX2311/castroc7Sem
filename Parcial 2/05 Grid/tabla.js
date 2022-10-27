new gridjs.Grid({
    columns: ['Id', 'Nombre', 'Apellido', 'Correo electronico'],
    server: {
        url: "http://localhost:8082/",
        then: ({ data }) =>
            data.map((persona) => [
                persona.id,
                persona.nombre,
                persona.apellido,
                persona.correo_electronico
            ])
    }
}).render(document.getElementById("wrapper"))