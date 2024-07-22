import OpenAI from "openai";
const openaiKey = useRuntimeConfig().public.OPENAI_KEY;
const openaiAssistant = useRuntimeConfig().public.OPENAI_ASSISTANT;



export const client = new OpenAI({
    apiKey: `${openaiKey}`,
}
)

export const assistant = `${openaiAssistant}`;