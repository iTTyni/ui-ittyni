import {styled} from "../../";

export const StyledBubble = styled('div')
<{
    color? : string, 
    bordered? : boolean, 
    bgColor?: string
    selectedBgColor?: string
    selected? : boolean,
    fullWidth? : boolean,
    lineHeight? : string,
    fontSize? : number
}>
`
    
    ${({fullWidth})=>fullWidth?'width : 100%;' : 'max-width: 180px;'}
    padding: 2px 12px;
    border-radius: ${({bordered})=>bordered?"14px" : '0'};;
    box-sizing: border-box;
    flex: none;
    font-size: ${({fontSize})=>fontSize?fontSize : '16'}px;
    line-height: ${({lineHeight})=>lineHeight?lineHeight : '24px'};
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
        `background-color: ${bgColor || '#f0f3fa'};`
    }
    
`

export const BubbleBorderd = ()=>StyledBubble.defaultProps = {
    bordered: true,
    fullWidth: true,
    selectedBgColor : "rgb(255 143 89)"
}