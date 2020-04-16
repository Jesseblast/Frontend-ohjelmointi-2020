const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("data.db");

db.serialize(() => {
    let sql = " \
        CREATE TABLE data ( \
            id integer PRIMARY KEY NOT NULL, \
            name text NOT NULL, \
            title text NOT NULL, \
            content text NOT NULL \
        )";

    db.run(sql, (err) => {
        if (err) return console.log(err.message);
    })
})