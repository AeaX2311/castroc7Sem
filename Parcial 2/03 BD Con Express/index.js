const sql = require("mssql");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors( { origin: "*", }));

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
app.post('/Persona/', async (req, res) => {
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
app.delete('/Persona/', async (req, res) => {
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
app.patch('/Persona/', async (req, res) => {
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
  app.get('/Persona/', async (req, res) => {
    const idPersona = req.body.id;
    await sql.connect(configuracionSql);
    const result = await sql.query(`SELECT * FROM persona WHERE id = ${idPersona}`);
    res.status(302).json({
        "Mensaje": "Persona encontrada",
        "Persona" : result
    });
  });
///////////////////////////////////////////

app.listen(3000, console.log('Servidor Express listo.'));
