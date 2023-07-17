import { Router } from "express";
import con from "../server/connection.js"
const appTraining = Router();


appTraining.post("/", (req, res) => {
    const { nombre, computadores, teclados, mouse, diademas } = req.body;
    con.query(
      /*sql*/ `SELECT * FROM areas_training WHERE nombre = ?`,
      [nombre],
      (err, data) => {
        if (err) {
          console.log(err);
          res.status(500).send("Error en el servidor");
        } else {
          if (data.length === 0) {
            // El área no existe, se crea una nueva
            con.query(
              /*sql*/ `INSERT INTO areas_training SET ?`,
              { nombre, computadores, teclados, mouse, diademas },
              (err, data, fields) => {
                if (err) {
                  console.log(err);
                  res.status(500).send("Error en el servidor");
                } else {
                  const result = { id: data.insertId, nombre, computadores, teclados, mouse, diademas };
                  res.status(200).send(result);
                }
              }
            );
          } else {
            // El área ya existe, se suman los valores
            const existingArea = data[0];
            const updatedComputadores = existingArea.computadores + computadores;
            const updatedTeclados = existingArea.teclados + teclados;
            const updatedMouse = existingArea.mouse + mouse;
            const updatedDiademas = existingArea.diademas + diademas;
  
            con.query(
              /*sql*/ `UPDATE areas_training SET computadores = ?, teclados = ?, mouse = ?, diademas = ? WHERE id = ?`,
              [updatedComputadores, updatedTeclados, updatedMouse, updatedDiademas, existingArea.id],
              (err, data, fields) => {
                if (err) {
                  console.log(err);
                  res.status(500).send("Error en el servidor");
                } else {
                  const result = {
                    id: existingArea.id,
                    nombre: existingArea.nombre,
                    computadores: updatedComputadores,
                    teclados: updatedTeclados,
                    mouse: updatedMouse,
                    diademas: updatedDiademas,
                  };
                  res.status(200).send(result);
                }
              }
            );
          }
        }
      }
    );
  });

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