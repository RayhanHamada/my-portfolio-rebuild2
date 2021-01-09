<template>
  <div class="flex flex-col pt-10 items-center space-y-5">
    <p class="text-my-red text-xl">Few things i've been working on</p>
    <div
      class="w-full flex flex-col space-y-5 md:flex-row md:space-y-0 md:h-52 md:flex-wrap"
    >
      <div
        v-for="(p, idx) in projects"
        :key="p.name"
        class="w-full flex flex-col items-center md:w-80 md:border-r-2 md:border-my-red"
      >
        <hr class="w-72 border-my-red md:border-t-0" v-if="idx > 0" />
        <div class="project flex flex-col w-72 h-full items-center space-y-2">
          <div class="project-name text-my-red font-bold">{{ p.name }}</div>
          <div
            class="project-description flex-grow"
            :class="darkTheme ? 'text-white' : 'text-my-red'"
          >
            {{ p.description }}
          </div>
          <ToRepoIcon @click="() => openRepoUrl(p.repoUrl)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useTheme } from '@/store/useTheme';
import { defineComponent, ref } from 'vue';

import ToRepoIcon from '@/components/small-components/ToRepoIcon.vue';

export default defineComponent({
  name: 'Projects',
  setup() {
    const projects = ref([
      {
        name: 'hello1',
        description:
          'Quis aliqua et est ut elit qui tempor et adipisicing excepteur eu Lorem nulla.',
        repoUrl: 'https://www.google.com',
      },
      {
        name: 'hello2',
        description: 'Velit est ipsum ad laboris eu officia non fugiat.',
        repoUrl: 'https://www.youtube.com',
      },
      {
        name: 'hello3',
        description: 'Velit est ipsum ad laboris eu officia non fugiat.',
        repoUrl: 'https://www.youtube.com',
      },
      {
        name: 'hello4',
        description: 'Velit est ipsum ad laboris eu officia non fugiat.',
        repoUrl: 'https://www.youtube.com',
      },
      {
        name: 'hello5',
        description: 'Velit est ipsum ad laboris eu officia non fugiat.',
        repoUrl: 'https://www.youtube.com',
      },
      // {
      //   name: 'hello6',
      //   description: 'Velit est ipsum ad laboris eu officia non fugiat.',
      //   repoUrl: 'https://www.youtube.com',
      // },
      // {
      //   name: 'hello7',
      //   description: 'Velit est ipsum ad laboris eu officia non fugiat.',
      //   repoUrl: 'https://www.youtube.com',
      // },
    ]);

    const { darkTheme } = useTheme();
    return {
      projects,
      darkTheme,
    };
  },
  components: {
    ToRepoIcon,
  },
  methods: {
    openRepoUrl(url: string) {
      window.open(url, '_blank');
    },
  },
});
</script>

<style></style>
