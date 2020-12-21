<template>
  <nav
    class="fixed w-full flex flex-row justify-between bg-my-dark opacity-75 py-4 pl-16 border-b-2 border-my-red"
  >
    <p class="font-extralight text-my-red text-xl">
      <b>Mocchapine</b> | Rayhan Hamada
    </p>
    <div class="space-x-5">
      <switch-button />
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
