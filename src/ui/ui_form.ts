import { device, styled } from "../..";

export const InputStyled = styled('input')<{
    placeholderColor? : string
    placeholderBg? : string
    border ? : string
    customDisabledCSS ? : string
}>
`
    min-height : 10px;
    outline : 0;
    padding : 2px 0;
    margin : 5px;
    background-color : white;
    color : #000000;
    font-weight: 700;
    border : ${({border})=>border?border : 'none'}

    ${device.desktop`

    `}
    
    ::placeholder {
        background-color : ${({placeholderBg})=>placeholderBg ? placeholderBg : 'white'};
        color : ${({placeholderColor})=>placeholderColor ? placeholderColor : '#000000'};
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