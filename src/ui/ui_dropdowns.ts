import { styled } from "../..";

export const DropdownMenuStyle = styled('ul')<{

}>`
    list-decoration: none;
`

export const DropdownListStyled = styled('ul')<{

}>
`
    position : absolute;
    max-height: 200px;
    min-width: 200px;
    overflow-y: scroll;
    &::-webkit-scrollbar{display:none;}
    z-index: 9999;
    background-color: white;
    border: 1px solid;
    display : ${({ hideMenu }: any) => hideMenu ? 'none' : 'block'};

    div {
        ul {
            margin: 0;
            padding: 0;
            list-style-type: none;
            li {
                width: inherit;
                height: 40px;
                line-height: 40px;
                border-bottom: 1px solid #D9E1E4;
                padding: 0 12px;
                vertical-align: top;
                overflow: hidden;
                cursor: pointer;
                transition: margin-top 0.5s, height 0.5s;
                display: flex;
                :hover {background : #eaeaea;}
            }
        }
    }
        
`