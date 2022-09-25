const express = require('express');
const cors = require('cors'); 
const app = express();

/////////////////////////Middleware
app.use(cors( { origin: "http://localhost:8082" } ) );
app.use(express.json());
app.use(express.text());

app.use((req, res, next) => {
    //npm winston (para un log)
    //npm log4js
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
    res.send(req.params.cadena.toUpperCase());
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
    var may = req.body.toUpperCase();
    var sinEsp = req.body.trim();
    var length = may.length;

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

// app.use((req, res) => {
//404
// })

/////////////////////////LISTEN
app.listen(8082, console.log('Servidor Express listo.'));