const express = require("express");
const cors = require("cors");
const fraseRouter = require("../Rutas/Frase");
const swagger = require('swagger-ui-express');
const swaggerJS = require('swagger-jsdoc');
const app = express();
const swaggerDocs = swaggerJS({
    definition: { openapi: '3.0.0', info: { title: 'API Frases', version: '1.0.0', }, servers: [{ url: "http://localhost:2311" }], }, apis: [`./Rutas/Frase.js`],
});

app.use(cors( { origin: "*", }));
app.use(express.json());
app.use('/Frase', fraseRouter.fraseRouter);
app.use("/docs", swagger.serve, swagger.setup(swaggerDocs));

app.listen(2311, console.log('Servidor listo. Puerto 2311.'));
module.exports = app;
