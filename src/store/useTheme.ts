import { ref, watch } from 'vue';

const darkTheme = ref(true);

if (process.env.NODE_ENV === 'development') {
  watch(darkTheme, function () {
    console.log('darkTheme berubah');
  });
}

export const useTheme = () => ({
  darkTheme,
});
