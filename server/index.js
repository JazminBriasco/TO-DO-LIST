//Require all dependecies i need.

const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'panchu338563',
    database: 'tasks'
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

console.log('hi');

app.post("/api/insert", (req, res) =>{
    console.log('insert server');
    const title = req.body.title;
    const content = req.body.content;
    const color = req.body.color;
    console.log('title server: ' + title);
    console.log('content server: ' + content);
    console.log('Color server: ' + color);
    const sqlInsert = "INSERT INTO card(title, content, color) VALUES(?, ?, ?);"
    db.query(sqlInsert, [title, content, color], (err, result) =>{
        err ? console.log(err) : console.log(result);
    });
});

app.get("/api/getAll", (req, res) =>{
    console.log('getAll server');
    const sqlRead = "SELECT * FROM card;"
    db.query(sqlRead, (err, result) =>{
        console.log(result);
        err ? console.log(err) : console.log(result); 
        res.send(result);
    });
});

app.get("/api/getToDo", (req, res) =>{
    console.log('getAll server');
    const sqlRead = "SELECT * FROM card WHERE state = 'todo';"
    db.query(sqlRead, (err, result) =>{
        console.log(result);
        err ? console.log(err) : console.log(result); 
        res.send(result);
    });
});

app.get("/api/getDoing", (req, res) =>{
    console.log('getAll server');
    const sqlRead = "SELECT * FROM card WHERE state = 'doing';"
    db.query(sqlRead, (err, result) =>{
        console.log(result);
        err ? console.log(err) : console.log(result); 
        res.send(result);
    });
});

app.get("/api/Done", (req, res) =>{
    console.log('getAll server');
    const sqlRead = "SELECT * FROM card WHERE state = 'done';"
    db.query(sqlRead, (err, result) =>{
        console.log(result);
        err ? console.log(err) : console.log(result); 
        res.send(result);
    });
});

app.listen(3010, () =>{
    console.log('Running on port 3010');
});

