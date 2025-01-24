import { createGlobalStyle } from "./styled-components";

const GlobalStyles = createGlobalStyle`
  ::selection {
    background: ${({ theme }) => theme.selection.bgColor};
    color: ${({ theme }) => theme.selection.color};
  }

  ::-webkit-scrollbar {
    width: ${({ theme }) => theme.scrollbar.width};
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.scrollbar.track.bgColor};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.scrollbar.thumb.bgColor};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.scrollbar.thumb.hoverBgColor};
  }

  html, body, #app {
    height: 100%;
  }

  body {
    margin: 0;
    background-color: ${({ theme }) => theme.application.bgColor};
    color: ${({ theme }) => theme.application.accentColor || '#000'};
    font-family: ${({ theme }) => theme.application.fontFamily};
    padding: ${({ theme }) => theme.application.padding || "23px"};
    border-radius: ${({ theme }) => theme.application.borderRedius || "5%"};
    line-height: ${({ theme }) => theme.typography.lineHeight || "1.5"};
  }
`

export default GlobalStyles;