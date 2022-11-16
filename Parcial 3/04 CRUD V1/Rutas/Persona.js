const sql = require("mssql");
const express = require("express");
var personaRouter = express.Router();

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
//Altas
personaRouter.post('/', async (req, res) => {
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const correoElectronico = req.body.correoElectronico;
    
    const pool = await sql.connect(configuracionSql);
    const result = await pool.request()
    .input('nombre', sql.VarChar(100), nombre)
    .input('apellido', sql.VarChar(100), apellido)
    .input('correoElectronico', sql.VarChar(100), correoElectronico)
    .query('INSERT INTO persona (nombre, apellido, correo_electronico) VALUES(@nombre, @apellido, @correoElectronico)');
    
    res.status(302).json({
      "Mensaje": "Persona agregada",
      "AffectedRows": result
    });
  });
  
  //Bajas
  personaRouter.delete('/', async (req, res) => {
    const idPersona = req.body.id;
  
    const pool = await sql.connect(configuracionSql);
    const result = await pool.request()
      .input('idPersona', sql.Int, idPersona)
    .query('DELETE FROM Persona WHERE id = @idPersona');
    
    res.status(302).json({
      "Mensaje": "Persona eliminada",
      "AffectedRows": result
    });
  });
  
  //Modificaciones
  personaRouter.patch('/', async (req, res) => {
    const idPersona = req.body.id;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const correoElectronico = req.body.correoElectronico;
    
    const pool = await sql.connect(configuracionSql);
    const result = await pool.request()
      .input('idPersona', sql.Int, idPersona)
      .input('nombre', sql.VarChar(100), nombre)
      .input('apellido', sql.VarChar(100), apellido)
      .input('correoElectronico', sql.VarChar(100), correoElectronico)
    .query('UPDATE Persona SET nombre = @nombre, apellido = @apellido, correo_electronico = @correoElectronico WHERE id = @idPersona');
    
    res.status(302).json({
      "Mensaje": "Persona modificada",
      "AffectedRows": result
    });
  });
  
  //Consultas
    personaRouter.get('/', async (req, res) => {
      const idPersona = req.body.id;
      await sql.connect(configuracionSql);
      const result = await sql.query(`SELECT * FROM persona WHERE id = ${idPersona}`);
      res.status(302).json({
          "Mensaje": "Persona encontrada",
          "Persona" : result
      });
    });
  ///////////////////////////////////////////


  module.exports.personaRouter = personaRouter;