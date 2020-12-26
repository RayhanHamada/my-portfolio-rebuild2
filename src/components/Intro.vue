<template>
  <div
    class="about flex flex-col md:flex-row justify-center items-center md:items-start md:pt-10 space-y-5 md:space-x-10"
  >
    <img
      class="shadow rounded-full w-24 md:w-48 h-auto align-middle border-my-dark-darker"
      src="./../assets/me.jpg"
      alt=""
    />
    <div class="flex flex-col justify-start items-center md:items-start">
      <p class="text-my-red text-2xl md:text-4xl">Wello There !</p>
      <p class="text-my-red text-sm md:text-base self-start">
        My name is Muhammad Rayhan Hamada Budiman.
      </p>
      <p class="text-my-red text-sm md:text-base">
        I like to code, playing games and frequently, cooking and experimenting
        new recipes.
      </p>
    </div>
    <p class="text-my-red"></p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Intro',
});
</script>

<style></style>
