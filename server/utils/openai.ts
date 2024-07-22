import OpenAI from "openai";
const openaiKey = useRuntimeConfig().public.openaiKey;
const openaiAssistant = useRuntimeConfig().public.openaiAssistant;



export const client = new OpenAI({
    apiKey: `${openaiKey}`,
}
)

export const assistant = `${openaiAssistant}`;