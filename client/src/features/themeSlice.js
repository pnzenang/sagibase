import { createSlice } from '@reduxjs/toolkit';

const themes = { cupcake: 'cupcake', dracula: 'dracula' };

const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem('theme') || themes.cupcake;
  document.documentElement.setAttribute('data-theme', theme);
  return theme;
};

const initialState = {
  theme: getThemeFromLocalStorage(),
};
const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      const { dracula, cupcake } = themes;
      state.theme = state.theme === dracula ? cupcake : dracula;
      document.documentElement.setAttribute('data-theme', state.theme);
      localStorage.setItem('theme', state.theme);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
