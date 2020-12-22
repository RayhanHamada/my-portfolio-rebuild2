<template>
  <nav
    class="fixed w-full flex flex-row justify-between bg-my-dark opacity-75 py-4 pl-2 md:pl-16 lg:pl-16 xl:pl-16 sm:pl-4 border-b-2 border-my-red"
  >
    <p
      class="font-normal lg:font-thin xl:font-thin text-my-red sm:text-sm md:text-sm lg:text-xl xl:text-xl"
    >
      <b>Mocchapine</b> | Rayhan Hamada
    </p>
    <div class="space-x-5">
      <switch-button class="sm:invisible" />
    </div>
  </nav>
</template>

<script>
import { defineComponent } from 'vue';
import SwitchButton from './SwitchButton.vue';

export default defineComponent({
  name: 'Navbar',
  components: {
    SwitchButton,
  },
});
</script>

<style lang="css"></style>
