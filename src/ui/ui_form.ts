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
    min-height : ${({minHeight})=>minHeight|| 10}px;
    width: ${({width})=>width?width : '100%'};
    outline : 0;
    padding : 2px 0;
    margin : 5px;
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