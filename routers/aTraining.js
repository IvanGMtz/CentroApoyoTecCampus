import { Router } from "express";
import con from "../server/connection.js"
const appTraining = Router();


appTraining.post("/", (req, res) => {
    con.query(
        /*sql*/ `INSERT INTO areas_training SET ?`,
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

appTraining.get("/", (req, res) => {
    con.query(
        /*sql*/ `SELECT * FROM areas_training`,
        req.body,
        (err,data,fils)=>{
            console.log(err);
            console.log(fils);
            res.send(data)
        }
    );
})

appTraining.put("/:id", (req, res) => {
    con.query(
        /*sql*/ `UPDATE areas_training SET ? WHERE id= ?`,
        [req.body, req.params.id],
        (err,data,fils)=>{
            console.log(err);
            console.log(fils);
            res.send(data)
        }
    );
})

appTraining.delete("/:id", (req, res) => {
    con.query(
        /*sql*/ `DELETE FROM areas_training WHERE id= ?`,
        req.params.id,
        (err,data,fils)=>{
            console.log(err);
            console.log(fils);
            res.send(data)
        }
    );
})



export default appTraining;