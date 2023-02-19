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
  colors: {
    [key: string] : string
  },
  fonts :{
    fontSize : number,
    fontFamily : string
  },
  windowHeight : number
}


export {styled, css, createGlobalStyle, keyframes, ThemeProvider };
