const BaseTheme = {
  colors: {
    light_grey: "lightgrey",
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
    bottom_right_md: "3px 3px 9px 0px rgba(0, 0, 0, 0.75)",
  },
};

export const LightTheme = {
  ...BaseTheme,
  colors: {
    ...BaseTheme.colors,
    bg: "#fff",
    text: "#000",
  },
};

export const DarkTheme = {
  ...BaseTheme,
  colors: {
    ...BaseTheme.colors,
    bg: "#000",
    text: "#fff",
  },
};
