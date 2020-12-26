<template>
  <Navbar />
  <div :class="'bg-my-dark h-full pt-20'">
    <intro />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from '@/components/Navbar.vue';
import Intro from '@/components/Intro.vue';

export default defineComponent({
  name: 'App',

  components: {
    Navbar,
    Intro,
  },
});
</script>

<style lang="scss">
#app {
  height: 120vh;
}
</style>
