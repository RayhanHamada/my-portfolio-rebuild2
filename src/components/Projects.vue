<template>
  <div class="w-full pt-8 md:pt-20 flex flex-col items-center overflow-y-auto">
    <div class="text-my-red text-2xl mb-2">Projects</div>
    <hr class="border-t border-my-red w-64" />
    <a
      class="text-my-red mt-2 hover:underline"
      v-for="p in projects"
      :href="p.html_url"
      :key="p.name"
    >
      {{ p.name }}
    </a>
  </div>
</template>

<script lang="ts">
import { useTheme } from '@/store/useTheme';
import { defineComponent, onMounted } from 'vue';
import { useGithub } from '@/store/useGithub';

export default defineComponent({
  name: 'Projects',
  setup() {
    const { projects, fetchProjects } = useGithub();
    onMounted(fetchProjects);
    const { darkTheme } = useTheme();
    return {
      projects,
      darkTheme,
    };
  },
  component: {},
  methods: {
    openRepoUrl(url: string) {
      window.open(url, '_blank');
    },
  },
});
</script>

<style></style>
