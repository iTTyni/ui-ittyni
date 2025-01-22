import {IThemeInterface, styled} from "../../";

export const SearchContainer = styled('div')<{
    border?: boolean
    theme: IThemeInterface
}>`
    display: flex;
    width : inherit;
    margin : 5px;
    ${({border}:any)=>border?? 'border : 1px solid #606469' };
    min-height : 2em; 
    align-items : center;

    span {
        padding : 5px 15px;

    }
`