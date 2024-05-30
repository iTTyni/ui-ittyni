import { device, lightTheme, styled } from "../..";

export const InputStyled = styled('input')<{
    placeholderColor? : string
    placeholderBg? : string
    border ? : boolean
    customDisabledCSS ? : string
    width?: string
    minHeight?: number
}>
`
    padding: 8px;
    font-size: 1em;
    border-radius: 4px;
    min-height : ${({minHeight})=>minHeight|| 10}px;
    width: ${({width})=>width?width : '100%'};
    outline : 0;
    background-color : white;
    color : #000000;
    font-weight: 700;
    border : ${({border, theme})=>border?'1px solid '+theme.color.primaryColor : 'none'};

    ${device.desktop`

    `}
    
    ::placeholder {
        background-color : ${({placeholderBg, theme})=>placeholderBg ? placeholderBg : theme?.color.defaultColor};
        color : ${({placeholderColor, theme})=>placeholderColor ? placeholderColor : theme?.color.secondaryColor};
        font-weight: 700;
    }
    
    :focus {
        outline: -webkit-focus-ring-color auto 1px
    }
    
    :disabled {
        background-color: white;
        ${({customDisabledCSS})=>customDisabledCSS};
    }
`

export const StyledSelect = styled('select')`
    padding-left: 20px;
    display: grid;
    grid-template-columns: 1fr 5fr;
    align-items: center;
`

export const StyledTextArea = styled('textarea')<{
    border? : string
    width? : string
    fontSize? : string
    fontFamily? : string
}>
`
    border : ${({border})=>border?border:'none'};
    width : ${({width})=>width?width:''};
    font-size : ${({fontSize})=>fontSize?fontSize:'14px'};
    font-family : ${({fontFamily})=>fontFamily?fontFamily:''};
`