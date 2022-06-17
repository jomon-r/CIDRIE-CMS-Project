const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: "Jomonraju@223",
    database: "CIDRIE"
});


app.get('/',(req,res) =>{
    
    const sqlSelect = "SELECT * FROM Zone_Issues";
    
    db.query(sqlSelect, (err,result)=>{
        if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
    });
    //res.send("Hello World");
});
app.listen(3001,()=>{
    console.log('running on port 3001');
});
