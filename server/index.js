//Require all dependecies i need.

const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'passowrd',
    database: 'tasks'
});

app.get('/', (req, res) =>{
    const sqlInsert = "describe users";
    
    db.query(sqlInsert, (err, result) =>{
        err ? res.send(err) : res.send(result);
    });
});


app.listen(3007, () =>{
    console.log('Running on port 3007');
});