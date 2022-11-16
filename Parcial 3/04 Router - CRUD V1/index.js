const express = require("express");
const cors = require("cors");
const personaRouter = require("./Rutas/Persona");

const app = express();
app.use(cors( { origin: "*", }));
app.use(express.json());

app.use('/Persona', personaRouter.personaRouter);

app.listen(3000, console.log('Servidor Express listo.'));
