import * as styledComponents from "styled-components";

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = (styledComponents as any) as styledComponents.ThemedStyledComponentsModule<
  IThemeInterface
>;

export interface IThemeInterface {
  application: {
    accentColor: string;
    fontSize: string;
    fontFamily: string;
    bgColor: string;
    borderColor: string;
    borderRedius: string
    padding: string;
  };
  scrollbar: {
    width: string;
    track: {
      bgColor: string;
    };
    thumb: {
      bgColor: string;
      hoverBgColor: string;
    };
  };
  selection: {
    bgColor: string;
    color: string;
  };
  typography: {
    lineHeight: string;
  };
  button: {
    color: string;
    border: string;
    bgColor: string;
    hoverBgColor: string;
    activeBgColor: string;
    shadowColor: string;
  };
  title: {
    bar: {
      bgColor: string;
      color: string;
      titleColor: string;
      menu: {
        borderColor: string;
        titleHoverBgColor: string;
        titleActive: {
          bgColor: string;
          borderColor: string;
        };
        separator: {
          bgColor: string;
        };
      };
      popup: {
        bgColor: string;
        border: string;
        shadow: string;
        item: {
          nameColor: string;
          shortcutColor: string;
          hover: {
            color: string;
            bgColor: string;
            shortcutColor: string;
          };
          nameShadowColor: string;
        };
      };
    };
  };
  ittyni: {
    headingColor: string;
  };
  windowHeight: number
}


export { styled, css, createGlobalStyle, keyframes, ThemeProvider };
