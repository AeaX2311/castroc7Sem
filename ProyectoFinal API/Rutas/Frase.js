const sql = require("mssql");
const express = require("express");
const registrarEnBitacora = require("../src/funciones");
var fraseRouter = express.Router();

///////////////////////////////////Conexion BD
const configuracionSql = {
    user:     "admin",
    password: "admin",
    database: "abd",
    server:   "AEAXPC\\SQLSERVER",
    options: { trustServerCertificate: true, }
  };
//////////////////////////////////////////

//////////////////////////////////////////CRUD
/**
 * @swagger
 * /frase:
 *  post:
 *    description: Inserta un registro <frase> en la base de datos
 *    responses:
 *      201:
 *        description: El registro fue ingresado correctamente
 *      400:
 *        description: El registro no pudo insertarse
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: json
 *            properties:
 *              frase:
 *                type: string
 *          example:
 *            frase: Frase que se va a insertar
 */
fraseRouter.post('/', async (req, res) => {
    registrarEnBitacora("POST");

    const frase = req.body.frase;
    let result;

    try{
        const pool = await sql.connect(configuracionSql);
        result = await pool.request()
        .input('frase', sql.VarChar(10000), frase)
        .query('INSERT INTO frase (frase) VALUES(@frase)');
    } catch {
        res.status(400).json({
            "Error": "La frase no se pudo insertar.",
            "AffectedRows": "0",
            "EjemploSolicitud": {
                "frase": "Frase que se va a insertar"
            }
        });
    }
    
    if(result.rowsAffected[0] === 0) {
        res.status(400).json({
            "Error": "La frase no se pudo insertar.",
            "AffectedRows": "0",
            "EjemploSolicitud": {
                "frase": "Frase que se va a insertar"
            }
        });
    } else {
        res.status(201).json({
          "Respuesta": "Frase insertada correctamente",
          "AffectedRows": result.rowsAffected[0]
        });
    }
  });
  
  /**
 * @swagger
 * /frase:
 *  delete:
 *    description: Elimina un registro <frase> en la base de datos
 *    responses:
 *      200:
 *        description: El registro fue eliminado
 *      400:
 *        description: El registro no se encontro, no fue eliminado
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: json
 *            properties:
 *              id:
 *                type: number
 *          example:
 *            id: 1
  */
  fraseRouter.delete('/', async (req, res) => {
    registrarEnBitacora("DELETE");

    const idFrase = req.body.id;
    let result = 0;

    try{
        const pool = await sql.connect(configuracionSql);
        result = await pool.request()
        .input('idFrase', sql.Int, idFrase)
        .query('DELETE FROM frase WHERE id_frase = @idFrase');
    } catch {
        res.status(400).json({
            "Error": "No se encontro el id de frase solicitado",
            "AffectedRows": "0",
            "EjemploSolicitud": {
                "id": "1"
            }
        });
        return;
    }

    if(result.rowsAffected[0] === 0) {
        res.status(400).json({
            "Error": "No se encontro el id de frase solicitado",
            "AffectedRows": "0",
            "EjemploSolicitud": {
                "id": "1"
            }
        });
        return;
    }

    res.status(200).json({
      "Respuesta": "Frase eliminada correctamente",
      "AffectedRows": result.rowsAffected[0]
    });
  });
  
/**
 * @swagger
 * /frase:
 *  patch:
 *    description: Modifica un registro <Frase> de la base de datos.
 *    responses:
 *      204:
 *        description: El registro fue modificado
 *      400:
 *        description: El registro no se encontro, no fue modificado
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: json
 *            properties:
 *              id:
 *                type: number
 *              frase:
 *                type: string
 *          example:
 *            id: 1
 *            frase: Frase modificada
 */
  fraseRouter.patch('/', async (req, res) => {
    registrarEnBitacora("PATCH");

    const idFrase = req.body.id;
    const frase = req.body.frase;
    let result = 0;

    try {
        const pool = await sql.connect(configuracionSql);
        result = await pool.request()
        .input('idFrase', sql.Int, idFrase)
        .input('frase', sql.VarChar(10000), frase)
        .query('UPDATE frase SET frase = @frase WHERE id_frase = @idFrase');
    } catch {
        res.status(400).json({
            "Error": "No se encontro el id de frase solicitado",
            "AffectedRows": "0",
            "EjemploSolicitud": {
                "id": "1",
                "frase": "Actualizacion de la frase"
            }
        });
        return;
    }

    if(result.rowsAffected[0] === 0) {
        res.status(400).json({
            "Error": "No se encontro el id de frase solicitado",
            "AffectedRows": result.rowsAffected[0],
            "EjemploSolicitud": {
                "id": "1",
                "frase": "Actualizacion de la frase"
            }
        });
        return;
    }

    res.status(200).json({
      "Respuesta": "Frase actualizada correctamente",
      "AffectedRows": result.rowsAffected[0]
    });
  });

/**
 * @swagger
 * /frase:
 *  get:
 *    description: Selecciona (busca) un registro <frase> de base de datos
 *    responses:
 *      200:
 *        description: Se encontro el registro en la base de datos
 *      400:
 *        description: El registro no se encontro
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: json
 *            properties:
 *              id:
 *                type: number
 *          example:
 *            id: 1
 */
  fraseRouter.get('/', async (req, res) => {
    registrarEnBitacora("GET");

    const idFrase = req.body.id;
    await sql.connect(configuracionSql);
    let result;
    
    try{
        result = await sql.query(`SELECT * FROM frase WHERE id_frase = ${idFrase}`);
    } catch {
        res.status(400).json({
            "Error" : "Registro no encontrado",
            "EjemploSolicitud": {
                "id": "1"
            }
        });
    }

    if(result.rowsAffected[0] === 0) {
        res.status(400).json({
            "Error" : "Registro no encontrado",
            "EjemploSolicitud": {
                "id": "1"
            }
        });
    } else {
        res.status(200).json({
            "Frase" : result
        });
    }
  });
  ///////////////////////////////////////////

module.exports.fraseRouter = fraseRouter;