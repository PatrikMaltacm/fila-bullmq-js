import express from "express";
import { addJob } from "./relatoriosQueue";
import "./relatoriosWorker";

const app = express();
const port = 3001;

app.use(express.json());

app.get('/', (req, res) => {
res.send("Health");
})

export type IDTORelatorio = {
    tipo: "Mensal" | "Semanal" | "Diario"
}

app.post('/relatorios', async (req, res) => {
    const body: IDTORelatorio = req.body;

    if(!body) return res.send({error: "Erro ao processar relatório"});
    
    if(!body.tipo) return res.send({error: "Erro ao processar relatório"});

    await addJob(body);

    res.status(202).send("Seu relatório está sendo processado!");

})

app.listen(port, () => {
    console.log("Server Running");
})