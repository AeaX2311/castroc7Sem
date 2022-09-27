const convertirMayusculas = (cadena) => {
    return cadena.toUpperCase();
}

function quitarEspacio(cadena) {
    return cadena.replace(/ /g, "");
}

function obtenerLongitud(cadena) {
    return cadena.length;
}

exports.convertirMayusculas = convertirMayusculas;
exports.quitarEspacio = quitarEspacio;
exports.obtenerLongitud = obtenerLongitud;