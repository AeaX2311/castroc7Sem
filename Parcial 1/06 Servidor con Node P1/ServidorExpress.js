const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Servidor Express contestando.');
});

app.listen(8082, console.log('Servidor Express listo.'));