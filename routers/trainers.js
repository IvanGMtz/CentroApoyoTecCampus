import { Router } from "express";
import con from "../server/connection.js";
import appValidate from "../middleware/ValidateTrainer.js";
import 'reflect-metadata';
const appTrainer = Router();


appTrainer.post("/", appValidate, (req, res) => {
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

appTrainer.put("/:id", appValidate, (req, res) => {
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