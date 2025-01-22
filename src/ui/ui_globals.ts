import { createGlobalStyle } from "../..";


export const GlobalStyles = createGlobalStyle`
    body, root {
        margin: ${({theme})=>theme.globals.margin};
        padding: ${({theme})=>theme.globals.padding};
        background-color: ${({theme})=>theme.color.defaultColor}
    }
`