import express from 'express';
import dotenv from "dotenv";
import appTrainer from './routers/trainers.js';
import appIncidencias from './routers/incidencias.js';
dotenv.config();
const appExpress = express();

appExpress.use(express.json());
appExpress.use("/trainers", appTrainer);
appExpress.use("/incidencias", appIncidencias);

let config = JSON.parse(process.env.MY_CONFIG);
appExpress.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});