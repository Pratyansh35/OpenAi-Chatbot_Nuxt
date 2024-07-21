import { client } from './openai';

export const getLatestMessage = async (threadID: string, runID: string) => {
    let run =  await client.beta.threads.runs.retrieve(threadID, runID);
}