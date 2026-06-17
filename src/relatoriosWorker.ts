import { Worker } from "bullmq";
import { connectionOptions } from "./config";
import { QueueEvents } from 'bullmq';

const worker = new Worker('relatorios', async job =>{
    setTimeout(()=> console.log(job.data), 5000);
}, {
    connection: connectionOptions
})

const queueEvents = new QueueEvents("relatorios", {
    connection: connectionOptions
});

queueEvents.on('waiting', ({ jobId }) => {
  console.log(`A job with ID ${jobId} is waiting`);
});

queueEvents.on('active', ({ jobId, prev }) => {
  console.log(`Job ${jobId} is now active; previous status was ${prev}`);
});

queueEvents.on('completed', ({ jobId, returnvalue }) => {
  console.log(`${jobId} has completed and returned ${returnvalue}`);
});

queueEvents.on('failed', ({ jobId, failedReason }) => {
  console.log(`${jobId} has failed with reason ${failedReason}`);
});

