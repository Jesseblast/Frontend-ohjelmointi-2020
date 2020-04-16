const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("data.db");

const sql = "INSERT INTO data VALUES(1, 'Pasi', 'Otsikko2', 'Sisältöteksti')";

db.all(sql, (error, results) => {
    
})