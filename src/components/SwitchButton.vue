<template>
  <label
    for="toggle"
    class="text-xs"
    :class="darkTheme ? 'text-white' : 'text-black'"
    >Dark Theme</label
  >
  <div
    class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"
  >
    <input
      type="checkbox"
      name="toggle"
      id="toggle"
      class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
      v-model="darkTheme"
    />
    <label
      for="toggle"
      class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
    ></label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useTheme } from '@/store/useTheme';

export default defineComponent({
  name: 'SwitchButton',
  setup() {
    const { darkTheme } = useTheme();

    return {
      darkTheme,
    };
  },
});
</script>

<style lang="css">
.toggle-checkbox:checked {
  @apply: right-0 border-green-400;
  right: 0;
  border-color: black;
}

.toggle-checkbox:checked + .toggle-label {
  @apply: bg-green-400;
  background-color: black;
}
</style>
