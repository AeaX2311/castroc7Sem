const express = require('express');
const cors = require('cors'); 
const cadenas = require('./Modulos/FuncionesCadenaFullExport');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');
const logger = fs.createWriteStream(path.join(__dirname, "access.log"), {
    flags: "a",
});
const app = express();

/////////////////////////Middleware
app.use(cors( { origin: "http://localhost:8082" } ) );
app.use(express.json());
app.use(express.text());
app.use(morgan('combined', {stream: logger}));

app.use((req, res, next) => {
    console.log('Primera funcion middleware');
    next();
}, (req, res, next) => {
    console.log('Segunda funcion middleware');
    next();
});

/////////////////////////GET
app.get('/', (req, res) => {
    res.status(200).sendFile("./www/Main.html", {
        root : __dirname
    }, (err) => {
        console.log('Error: ' + err);
    })
});

app.get('/mayusculas/:cadena', (req, res) => {
    res.send(cadenas.convertirMayusculas(req.params.cadena));
});

app.get('/suma', (req, res) => {
    var suma = parseInt(req.query.x) + parseInt(req.query.y);
    res.send(`La suma es ${suma}`);
});

app.get("*", (req, res) => {
    res.status(404).sendFile("./www/404.html", {
        root : __dirname
    }, (err) => {
        console.log('Error: ' + err);
    })
});

/////////////////////////POST
app.post('/', (req, res) => {
    res.send('POST. Servidor Express contestando.');
});

app.post("/texto", (req, res) => {
    let may = cadenas.funciones.convertirMayusculas(req.body);
    let sinEsp = cadenas.funciones.quitarEspacio(req.body);
    let length = cadenas.funciones.obtenerLongitud(req.body);

    res.json({
        mayusculas: may,
        sinEspacios: sinEsp,
        longitud: length
    });
});

app.post("/json", (req, res) => {
    var cadena = `Hola ${req.body.nombre} ${req.body.apellido}, como estas?`;
    res.json({
        cadena: cadena
    });
});

/////////////////////////LISTEN
app.listen(8082, console.log('Servidor Express listo.'));