import { Router } from "express";
import con from "../server/connection.js"
const appIncidencias = Router();


appIncidencias.post("/", (req, res) => {
    con.query(
        /*sql*/ `INSERT INTO incidencias SET ?`,
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

appIncidencias.get("/", (req, res) => {
    con.query(
        /*sql*/ `SELECT * FROM incidencias`,
        req.body,
        (err,data,fils)=>{
            console.log(err);
            console.log(fils);
            res.send(data)
        }
    );
})

appIncidencias.put("/:id", (req, res) => {
    con.query(
        /*sql*/ `UPDATE incidencias SET ? WHERE id= ?`,
        [req.body, req.params.id],
        (err,data,fils)=>{
            console.log(err);
            console.log(fils);
            res.send(data)
        }
    );
})

appIncidencias.delete("/:id", (req, res) => {
    con.query(
        /*sql*/ `DELETE FROM incidencias WHERE id= ?`,
        req.params.id,
        (err,data,fils)=>{
            console.log(err);
            console.log(fils);
            res.send(data)
        }
    );
})



export default appIncidencias;