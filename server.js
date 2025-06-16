import http from "http";
import express from 'express'
import router from './Rotas/Router.js'

const app = express()
const PORT = 3000;

app.use(express.json())

app.use('/edit', router)

app.listen(PORT, ()=>{
    console.log("Servidor rodando");
});