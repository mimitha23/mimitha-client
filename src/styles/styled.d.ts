import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    mode: ModeT;
    app: AppUtilsT;
    media: MediaT;
    colors: ColorsT;
    fontSize: FontSizeT;
    font: FontT;
    gradients: GradientsT;
    shadow: ShadowT;
  }

  type ModeT = "dark" | "light";

  interface AppUtilsT {
    container: "1280px";
    nav_h: string;
    nav_h_full: "15rem";
    nav_h_full_mobile: "12rem";
    nav_h_partial: "7.5rem";
    section_animation_duration: "0.3s";
    form_field_w_tablet: "36rem";
  }

  interface MediaT {
    desktop_lg: "max-width:105em"; //1680px
    desktop: "max-width:80em"; // 1280px
    tablet: "max-width:60em"; // 960px
    tablet_sm: "max-width:42.5em"; // 680px
    mobile: "max-width:30em"; // 450px
  }

  interface ColorsT {
    bg: "#fff" | "#000";
    text: "#000" | "#fff";
    gray_shade: "rgba(215, 215, 215, 1)";
    gray_tint: "rgba(240, 240, 240, 1)";
    white: "#fff";
    blue: "#1481ee";
    black: "#000";
    black_tr_05: "rgba(0,0,0,0.5)";
    black_tr_02: "rgba(0,0,0,0.2)";
    red: "#d01345";
    green: "#26E066";
  }

  interface FontSizeT {
    sm: "1.2rem";
    md: "1.4rem";
    base: "1.6rem";
    lg: "1.8rem";
    xl: "2rem";
    xxl: "2.2rem";
    h3: "3rem";
  }

  interface FontT {
    thin: 300;
    regular: 400;
    medium: 500;
    bold: 700;
  }

  interface GradientsT {
    backdrop_gradient: "radial-gradient(circle, rgba(0,0,0,0.6) 0%, rgba(0,0,0,1) 100%)";
  }

  interface ShadowT {
    top_left_md_dark: "-3px -3px 9px 0px rgba(0, 0, 0, 0.75)";
    bottom_right_md_dark: "3px 3px 9px 0px rgba(0, 0, 0, 0.75)";
    bottom_right_md_light: "1px 2px 6px 0px rgba(0, 0, 0, 0.4)";
    radial_sm_dark: "0 0 0.5rem rgba(0, 0, 0, 0.5)";
    radial_sm_light: "0 0 0.5rem rgba(299, 299, 299, 0.5)";
    radial_sm_dark_fade: "0 0 0.75rem 0.2rem rgba(0, 0, 0, 0.2)";
    radial_sm_light_fade: "0 0 0.75rem 0.2rem rgba(299, 299, 299, 0.2)";
    radial_lg_dark: "0 0 2.5rem 0.5rem rgba(0, 0, 0, 0.5)";
    radial_lg_light: "0 0 2.5rem 0.5rem rgba(299, 299, 299, 0.5)";
  }
}