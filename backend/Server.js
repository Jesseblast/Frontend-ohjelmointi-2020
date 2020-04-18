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


// Add an entry
app.post("/data/add", (req, res, next) => {
    let tap = req.body;
    db.run("INSERT INTO data (name, title, content) VALUES (?, ?, ?)", [tap.name, tap.title, tap.content], (error, result) => {
        if (error) throw error;
        return res.status(200).json( {count: this.changes} );
    })
})

// Delete an entry
app.get("/data/delete/:id", (req, res, next) => {
    let id = req.params.id;
    db.run("DELETE FROM data WHERE id = ?", [id], (error, result) => {
        if (error) throw error;
        return res.redirect("http://localhost:3000/");
    })
})

// Return all entries
app.get("/data/all", (req, res, next) => {
    db.all("SELECT * FROM data", (error, results) => {
        if (error) throw error;
        return res.status(200).json(results);
    })
})

// Delete all entries
app.get("/data/deleteall", (req, res, next) => {
    db.all("DELETE FROM data", (error, result) => {
        if (error) throw error;
        return res.redirect("http://localhost:3000/lisaa");
    })
})