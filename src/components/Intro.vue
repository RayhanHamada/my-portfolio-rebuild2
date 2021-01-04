<template>
  <div
    class="about flex flex-col md:flex-row justify-center items-center md:items-start md:pt-10 space-y-5 md:space-x-10"
  >
    <img
      class="shadow rounded-full w-24 md:w-48 h-auto align-middle border-my-dark-darker"
      :src="profilePic"
      alt="My Profile Picture"
    />
    <div class="flex flex-col justify-start items-center md:items-start">
      <p class="text-my-red text-2xl md:text-4xl">Wello There !</p>
      <p class="text-my-red text-sm md:text-base self-start">
        My name is Muhammad Rayhan Hamada Budiman.
      </p>
      <p class="text-my-red text-sm md:text-base">
        I like to code, playing games and frequently, cooking and try new
        recipes.
      </p>
    </div>
    <p class="text-my-red"></p>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';

import { useGithub } from '@/store/useGithub';

export default defineComponent({
  name: 'Intro',
  setup() {
    const { profilePic, fetchProfilePic } = useGithub();

    onMounted(() => {
      fetchProfilePic();
    });

    return {
      profilePic,
    };
  },
});
</script>

<style></style>
