import styled from "../../../theme/styled-components";

export const Tip = styled('div')<{
    selected : boolean,
    Color : string,
    capColor : string,
    bgColor : string, 
    selectedColor? : string,
    selectedBgColor? : string
}>
`
    background: ${({bgColor})=>bgColor};
    position : relative;
    display: flex;
    width: 100px;
    justify-content: space-around;
    min-height: 20px;
    margin : 5px;
    div {
        padding : 2px;
        text-align : center;
    }
    .icon {
        flex : 1px;
        border-right : 1.5px dotted ${({capColor})=>capColor};;
        position: relative;
        svg {
            fill : ${({capColor})=>capColor};
            position: absolute;
            left: 25%;
            top: 15%;
            height : 15px;
            width : 12px;
        }
    }

    .text {
        flex: 3;
        cursor : pointer;
        color: ${({selected, Color, selectedColor})=>selected? Color : selectedColor};
        font-weight: 700;
        font-size 14px;
        background-color : ${({selected, bgColor, selectedBgColor})=>selected? bgColor : selectedBgColor};
    }
    i {
        position: absolute;
        right: -7px;
        top: -12px;
        color: green;
        z-index: 999;
    }
`