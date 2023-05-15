const BaseTheme = {
  colors: {},
  app: {
    container: "1280px",
    nav_h: "18rem",
  },
};

export const LightTheme = {
  ...BaseTheme,
  colors: {
    bg: "#fff",
    text: "#000",
  },
};

export const DarkTheme = {
  ...BaseTheme,
  colors: {
    bg: "#000",
    text: "#fff",
  },
};
