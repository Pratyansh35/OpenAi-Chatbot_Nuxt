// https://nuxt.com/docs/api/configuration/nuxt-config
import { config } from 'dotenv';
config();


export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  runtimeConfig: {
    OPENAI_KEY: process.env.OPENAI_API_KEY || '',
    OPENAI_ASSISTANT: process.env.OPENAI_ASSISTANT || '',
  },
})
