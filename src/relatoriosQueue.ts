import { Queue } from "bullmq";
import { connectionOptions } from "./config";
import { IDTORelatorio } from ".";

const myQueue = new Queue('relatorios', {
    connection: connectionOptions
});

export async function addJob(params: IDTORelatorio) {
    await myQueue.add("gerarRelatorio", params);
}
