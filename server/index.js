//Require all dependecies i need.

require('dotenv').config();

const express = require('express');

const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');



const db = mysql.createPool({
    host: process.env.DB_HOST ,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "tasks"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

console.log('hi');

/**POST */
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


/**GET */
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

app.get("/api/getDone", (req, res) =>{
    console.log('getAll server');
    const sqlRead = "SELECT * FROM card WHERE state = 'done';"
    db.query(sqlRead, (err, result) =>{
        console.log(result);
        err ? console.log(err) : console.log(result); 
        res.send(result);
    });
});

/**UPDATE */
app.put("/api/updateTitle/", (req, res) =>{
    const id_card = req.body.id_card;
    const title = req.body.title;
    console.log("SON:" + id_card, title);
    const sqlUpdateTitle = "UPDATE card SET title = '?' WHERE id_card = ?";
    db.query(sqlUpdateTitle, [id_card, title], (err, result) =>{
        err ? console.log(err) : console.log(result); 
        res.send(result);
    });
});

app.put("/api/updateContent/", (req, res) =>{
    const id_card = req.body.id_card;
    const content = req.body.content;
    const sqlUpdateContent = "UPDATE card SET content = '?' WHERE id_card = ?";
    db.query(sqlUpdateContent, [id_card, content], (err, result) =>{
        err ? console.log(err) : console.log(result); 
        res.send(result);
    });
});


/**DELETE */
app.delete("/api/delete/:id_card", (req, res) =>{
    const id_card = req.params.id_card;
    const sqlDelete = `DELETE FROM card WHERE id_card = '${id_card}'`;
    db.query(sqlDelete, (err, result) =>{
        err ? console.log(err) : console.log(result); 
        res.send(result);
    });
});

/**CHANGE STATE */
app.put("/api/upTo", (req, res) =>{
    const state = req.body.state;
    const id_card = req.body.id_card;
    
    /* const sqlUp = "UPDATE card SET status = '?' WHERE id_card = ?"; */
    const sqlUp = `UPDATE card SET state = '${state.toLowerCase()}' WHERE id_card = ${id_card}`;
    console.log(sqlUp);
    db.query(sqlUp, [state, id_card], (err, result) =>{
        err ? console.log(err) : console.log(result); 
        res.send(result);
    });
});



app.listen(3010, () =>{
    console.log('Running on port 3010');
});

