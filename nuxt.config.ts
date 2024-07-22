// https://nuxt.com/docs/api/configuration/nuxt-config
import { config } from 'dotenv';
config();


export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  runtimeConfig: {
    public: {
      openaiKey: process.env.OPENAI_KEY?.toString(),
      openaiAssistant: process.env.OPENAI_ASSISTANT?.toString(),
    },
  },
})
