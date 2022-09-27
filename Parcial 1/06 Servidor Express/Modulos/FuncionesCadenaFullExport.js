const convertirMayusculas = (cadena) => {
    return cadena.toUpperCase();
}

function quitarEspacio(cadena) {
    return cadena.replace(/ /g, "");
}

function obtenerLongitud(cadena) {
    return cadena.length;
}

const cadenas = {};
cadenas.convertirMayusculas = convertirMayusculas;
cadenas.quitarEspacio = quitarEspacio;
cadenas.obtenerLongitud = obtenerLongitud;

exports.funciones = cadenas;