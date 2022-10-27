const express = require('express');
const cors = require('cors');
const app = express();
const sql = require('mssql');

/////////////////////////Middleware
app.use(cors( { origin: "*" } ) );
app.use(express.json());


////////////////////////BD
const sqlConfig = {
    user: "admin",
    password: "admin",
    database: "abd",
    server: 'AEAXPC\\SQLSERVER',
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000
    },
    options: {
      encrypt: true,
      trustServerCertificate: true
    }
  }
////////////////////////

/////////////////////////GET
app.get('/', async (req, res) => {
    try {
        await sql.connect(sqlConfig)
        const result = await sql.query`select * from persona`;
   
        res.status(200).json({
            "data": result.recordset
        })
    } catch (err) {
        console.log(err)
    }
});

/////////////////////////LISTEN
app.listen(8082, console.log('Servidor Express listo.'));