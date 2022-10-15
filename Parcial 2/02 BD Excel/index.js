const sql = require("mssql");
const express = require("express");
const cors = require("cors");
const json2xls = require("json2xls")
const app = express();
const port = 3000;

const configuracionSql = {
  user:     "admin",
  password: "admin",
  database: "AdventureWorks2019",
  server:   "AEAXPC\\SQLSERVER",
  options: { trustServerCertificate: true, }
};

app.use(json2xls.middleware);
app.use(
  cors({
    origin: "*",
  })
);

app.get("/saveExcel", async (req, res) => {
  try {
    await sql.connect(configuracionSql);
    const result = await sql.query("SELECT TOP 10 * FROM Person.Person ");
    res.xls("Personas.xlsx", result.recordset)
  } catch (error) {
    console.error(error);
  }
});

app.listen(port);
