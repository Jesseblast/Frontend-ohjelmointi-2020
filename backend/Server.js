const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("data.db");


app.listen(8080, () => {
    console.log("localhost:8080");
})

app.get("/", (req, res, next) => {
    return res.status(200).send([{ data: "/data/add/" }, {data: "/data/all" }]);
})


app.post("/data/add", (req, res, next) => {
    let tap = req.body;
    db.run("INSERT INTO data (name, title, content) VALUES (?, ?, ?)", [tap.name, tap.title, tap.content], (error, result) => {
        if (error) throw error;
        return res.status(200).json( {count: this.changes} );
    })
})

// Returns all entries
app.get("/data/all", (req, res, next) => {
    db.all("SELECT * FROM data", (error, results) => {
        if (error) throw error;
        return res.status(200).json(results);
    })
})