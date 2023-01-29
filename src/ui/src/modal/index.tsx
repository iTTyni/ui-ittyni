import styled from "../../../theme/styled-components"

export const ModalContainer = styled('div')<{
    width?:number, height?:number
    left?:number, top?:number
 }>`
    border-radius: 8px;
    position: fixed;
    z-index: 999;
    height: ${({height})=>height ? height : 500}px;
    width: ${({width})=>width ? width : 70}%;
    left: ${({left})=>left ? left : 10}%;
    top: ${({top})=>top ? top : 5}%;
    background-color: white;
    box-shadow: 0 0 20px rgba(21, 21, 29, 0.2);
`
export const ModalHeader = styled('div')`
    padding: 5px;
    display : flex;
    justify-content : space-between;
    &>span {
        color: red;
        font-size: 25px;
        font-weight: 800;
        padding : 0 10px 10px 0;
        cursor : pointer;
    }
`
export const ModalContent = styled('div')<{minHeight?:number}>`
    margin: 10px 10px 25px 10px;
    min-height : ${({minHeight})=>minHeight? minHeight : 340}px;
    &>div {
        padding : 10px 0 ;
        &>span {
            margin-right : 10px;
        }
    }
`
export const ModalFooter = styled('div')`
    margin: 10px;
    display : flex;
    justify-content : space-between;
`
export const SubModal = styled('div')<{width?:number, height?:number}>`
    border-radius: 8px;
    position: fixed;
    z-index: 999;
    height: ${({height})=>height ? height : 500}px;
    width: ${({width})=>width ? width : 70}%;
    left: 20%;
    top: 25%;
    background-color: white;
    box-shadow: 0 0 20px rgba(21, 21, 29, 0.2);
`
export const SubModalHeader = styled('div')`
    padding: 15px 0 0 15px
    border-bottom: 2px solid lightgray;
    display : flex;
    justify-content : space-between;
    &>span {
        color: red;
        font-size: 20px;
        font-weight: 800;
        padding : 0 10px 5px 0;
        cursor : pointer;
    }
`
export const SubModalContent = styled('div')<{minHeight?:number}>`
    margin: 10px 10px 25px 10px;
    min-height : ${({minHeight})=>minHeight? minHeight : 340}px;
    &>div {
        padding : 10px 0 ;
        &>span {
            margin-right : 10px;
        }
    }
`
export const SubModalFooter = styled('div')`
    margin: 10px;
    display : flex;
    justify-content : space-between;
`
export const ModalList = styled('ul')`
    width: 96%;
    max-height: 300px;
    overflow-y: scroll;
    display: grid;
    &>li{
        display : grid;
        grid-column-gap : 10px;
        grid-template-columns: min-content min-content auto;
        border-bottom : 1px solid gray;
        padding: 5px;
    } 
    &::-webkit-scrollbar { display: none; }
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;
`
export const ModalListData = styled('ul')`
    width: 96%;
    max-height: 300px;
    overflow-y: scroll;
    display: grid;
    &>li{
        &>.list {
            display : grid;
            grid-column-gap : 10px;
            grid-template-columns: min-content auto min-content min-content;
            border-bottom : 1px solid gray;
            padding: 5px;
        }
        &>.form {
            div {
                display : grid;
                grid-column-gap : 10px;
                grid-template-columns: 100px 200px;
                padding: 5px;
            }
        }
            
    } 
    &::-webkit-scrollbar { display: none; }
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;
`
export const Bubble = styled('div')`
    max-width: 180px;
    padding: 2px 12px;
    background-color: #f0f3fa;
    border-radius: 14px;
    box-sizing: border-box;
    flex: none;
    font-size: 16px;
    line-height: 24px;
    color: #131722;
    cursor: default;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width : fit-content;
    cursor : pointer
`
export const ModalListMenu = styled('span')`
    float: right;
    color: gray;
    font-size: 14px;
    padding: 0 5px;
    cursor : pointer;
`
export const ModalProcedure = styled('div')<{

}>`
    display: grid; 
    grid-template-columns: 20% auto;
    .header {
        margin: 5px 15px;
        padding: 15px;
        border-bottom: 1px solid #e5e2e2;
    }
    .sidebar {
        ul {
            list-style : none;
    
            li {
                padding: 10px;
                font-size: 14px;
                font-weight: 700;
                color : #414141;
            }
            li.active {
                color : #0F56B3
                background-color: aliceblue;
            }
        }
    }

    .content {
        padding-left: 20px;
        border-left: 0.5px solid #e5e2e2;
        margin-left: 15px;
    }
`