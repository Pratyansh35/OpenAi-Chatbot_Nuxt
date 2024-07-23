<template>
  <section class="flex flex-col items-center gap-6 p-4 md:p-8">
    <img src="/bruno.svg" class="w-32 h-32 md:w-64 md:h-64 rounded-full" />
    <h1 class="text-center font-bold text-xl md:text-2xl">
      Pratyansh's Talk
    </h1>
    <form @submit.prevent="handleSubmit" class="w-full max-w-sm">
      <fieldset :disabled="isSubmitted" class="flex flex-col gap-4">
        <input v-model="customerName" type="text" placeholder="Your name"
          class="w-full transition p-2 text-sm border border-slate-300 shadow-sm placeholder:text-slate-400 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary rounded-xl" />
        <small class="text-slate-500 italic text-xs">
          Please provide a name so Pratyansh knows who he's talking to.
        </small>
        <button :disabled="namehasError" type="submit"
          class="transition w-full bg-blue-950 text-slate-300 font-medium py-2 px-3 rounded hover:bg-opacity-90">
          Start a New Chat
        </button>
        <button 
          v-if="thread && run"
          @click="isChatting = true"
          type="button"
          class="transition w-full bg-slate-200 text-slate-600 font-medium py-2 px-3 rounded hover:bg-opacity-90">
          Continue Previous Chat
        </button>
      </fieldset>
    </form>
  </section>
</template>

<script setup lang="ts">

const isChatting = useisChatting();
const { customerName, namehasError } = useCustomers();

const isSubmitted = ref(false)

const thread = useCookie("thread-id");
const run = useCookie("run-id");

async function handleSubmit() {
  const response = await $fetch("/api/thread", {
    query: {
      name: customerName.value,
      thread: thread.value,
      run: run.value
    },
  });
  thread.value = response.thread;
  run.value = response.run;

  isChatting.value = true;
}
</script>