import { Router } from "express";
import mysql from "mysql2";
const appTrainer = Router();
let con = undefined;

appTrainer.use((req, res, next)=>{
    try {
        con = mysql.createPool({
            host: "127.0.0.1",
            user: "root",
            password: "123456",
            database: "centroapoyocampus",
            port: 3306
    });
    next();        
    } catch (error) {
        res.status(500).send('Conexion pailas papá')
    }
})

appTrainer.post("/", (req, res) => {
    con.query(
        /*sql*/ `INSERT INTO trainers SET ?`,
        req.body,
        (err,data,fils)=>{
            console.log(err);
            data.affectedRows+=200;
            let result = req.body;
            result.id= data.insertId;
            res.status(data.affectedRows).send(result);
        }
    );
})

appTrainer.get("/", (req, res) => {
    con.query(
        /*sql*/ `SELECT * FROM trainers`,
        req.body,
        (err,data,fils)=>{
            console.log(err);
            console.log(fils);
            res.send(data)
        }
    );
})

appTrainer.put("/:id", (req, res) => {
    con.query(
        /*sql*/ `UPDATE trainers SET ? WHERE id= ?`,
        [req.body, req.params.id],
        (err,data,fils)=>{
            console.log(err);
            console.log(fils);
            res.send(data)
        }
    );
})

appTrainer.delete("/:id", (req, res) => {
    con.query(
        /*sql*/ `DELETE FROM trainers WHERE id= ?`,
        req.params.id,
        (err,data,fils)=>{
            console.log(err);
            console.log(fils);
            res.send(data)
        }
    );
})



export default appTrainer;