/**
 * Registra la peticion realizada hacia el servidor.
 * Hace un consoleLog.
 * @param {string} peticion 
 */
const registrarEnBitacora = (peticion) => {
    console.log(`Se hace una peticion ${peticion} al servidor. | ${new Date()}`);
}

module.exports = registrarEnBitacora;