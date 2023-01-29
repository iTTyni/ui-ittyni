import styled from "../../../theme/styled-components";

export const Bubble = styled('div')
<{
    color? : string, 
    bordered? : boolean, 
    bgColor?: string
    selectedBgColor?: string
    selected? : boolean
}>
`
    max-width: 180px;
    padding: 2px 12px;
    border-radius: ${({bordered})=>bordered?"14px" : '0'};;
    box-sizing: border-box;
    flex: none;
    font-size: 16px;
    line-height: 24px;
    color:  ${({color})=>color?color : '#131722'};
    cursor: default;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width : fit-content;
    cursor : pointer
    margin: 0 5px;
    ${(
        {selected, bgColor, selectedBgColor})=>selected?
        `background-color: ${selectedBgColor}`
        :
        `background-color: ${bgColor?bgColor : '#f0f3fa'};`
    }
    
`