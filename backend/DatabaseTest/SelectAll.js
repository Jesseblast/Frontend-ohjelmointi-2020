const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("data.db");

db.all("SELECT * FROM data", (error, results) => {
    console.log(results)
})