const express = require('express');
const cors = require('cors'); 
const router = express.Router();

const app = express();

/////////////////////////Middleware
app.use(cors( { origin: "http://localhost:8082" } ) );
app.use(express.text());

/////////////////////////GET
app.get('/', (req, res) => {
    res.status(200).sendFile("./www/Main.html", {
        root : __dirname
    }, (err) => {
        console.log('Error: ' + err);
    })
});

/////////////////////////Routeador
router.post('/', (req, res) => {
    res.status(201).json({
        "mensaje" : "CREAR"
    });
});

router.get('/', (req, res) => {
    res.status(302).json({
        "mensaje" : "BUSCAR"
    });
});

router.put('/', (req, res) => {
    res.status(301).json({
        "mensaje" : "ACTUALIZAR"
    });
});
router.delete('/', (req, res) => {
    res.status(202).json({
        "mensaje" : "ELIMINAR"
    });
});

/////////////////////////LISTEN

app.listen(8082, console.log('Servidor Express listo.'));