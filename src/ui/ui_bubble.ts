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
    fontSize? : number,
    border? : boolean
    onClick? : any,
    children? : any
}>`
    ${({fullWidth})=>fullWidth?'width : 100%;' : 'max-width: 180px;'}
    padding: 2px 12px;
    border-radius: ${({bordered}:any)=>bordered?"14px" : '0'};
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
    cursor : pointer;
    margin: 0 5px;
    background-color: ${
        ({selected, selectedBgColor, bgColor}:any)=>{
            if(selected){
                return selectedBgColor?selectedBgColor:(bgColor || '#f0f3fa');
            } else {
                return bgColor?bgColor: '#f0f3fa'
            }
        }}
    
`

export const BubbleBorderd = ()=>StyledBubble.defaultProps = {
    bordered: true,
    fullWidth: true,
    selectedBgColor : "rgb(255 143 89)"
}