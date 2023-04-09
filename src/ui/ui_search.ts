import {styled} from "../../";

export const SearchContainer = styled('div')`
    display: flex;
    width : 90%;
    margin : 5px;
    border : 1px solid #606469;
    min-height : 2em; 
    align-items : center;

    span {
        padding : 5px 15px;

    }

    input {
        border : none;
        flex : 6;
        font-size : 16px;
        outline : 0;
        padding : 12px 0px; 
    }
`