<template>
  <Navbar />
  <div class="h-full pt-20" :class="darkTheme ? 'bg-my-dark' : 'bg-my-light'">
    <Intro />
    <Projects />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from '@/components/Navbar.vue';
import Intro from '@/components/Intro.vue';
import Projects from '@/components/Projects.vue';

import { useTheme } from '@/store/useTheme';

export default defineComponent({
  name: 'App',
  setup() {
    const { darkTheme } = useTheme();
    return {
      darkTheme,
    };
  },
  components: {
    Navbar,
    Intro,
    Projects,
  },
});
</script>

<style lang="scss">
#app {
  height: 120vh;
}
</style>
