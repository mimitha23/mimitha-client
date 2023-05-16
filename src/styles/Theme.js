const BaseTheme = {
  mode: "light",
  colors: {
    gray_shade: "rgba(215, 215, 215, 1)",
    gray_tint: "rgba(240, 240, 240, 1)",
    white: "#fff",
    black: "#000",
  },
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
  shadow: {
    bottom_right_md_dark: "3px 3px 9px 0px rgba(0, 0, 0, 0.75)",
    bottom_right_md_light: "3px 3px 9px 0px rgba(299, 299, 299, 0.75)",
  },
};

export const LightTheme = {
  ...BaseTheme,
  mode: "light",
  colors: {
    ...BaseTheme.colors,
    bg: "#fff",
    text: "#000",
  },
};

export const DarkTheme = {
  ...BaseTheme,
  mode: "dark",
  colors: {
    ...BaseTheme.colors,
    bg: "#000",
    text: "#fff",
  },
};
