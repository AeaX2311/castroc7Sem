const express = require("express");
const cors = require("cors");
const personaRouter = require("./Rutas/Persona");
const swagger = require('swagger-ui-express');
const swaggerJS = require('swagger-jsdoc');

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Personas',
            version: '1.0.0',
        },
        servers: [{
            url: "http://localhost:3000"
        }],
    },
    apis: [`./Rutas/Persona.js`],
};
const app = express();
const swaggerDocs = swaggerJS(swaggerOptions);

app.use(cors( { origin: "*", }));
app.use(express.json());
app.use('/Persona', personaRouter.personaRouter);
app.use("/docs",swagger.serve,swagger.setup(swaggerDocs));

app.listen(3000, console.log('Servidor Express listo.'));

module.exports = app;
