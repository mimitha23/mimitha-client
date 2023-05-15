const BaseTheme = {
  colors: {},
  app: {
    container: "1280px",
    nav_h: "18rem",
  },
  fontSize: {
    sm: "1.2rem",
    base: "1.6rem",
    lg: "1.8rem",
    xl: "2rem",
    xxl: "2.2rem",
    h3: "3rem",
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
