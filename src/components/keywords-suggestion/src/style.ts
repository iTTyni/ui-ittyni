import styled from "styled-components";

export const KWContainer = styled('div')<{column? :any}>
`
    margin : 5px 0;
    display : flex;
    /** common styles */
    div {
        position: relative;

        input {}

        ul {
            list-style: none; 
            position: absolute;
            background: white; 
            width: 100%;
            border: 1px solid grey;
            li {
                display : flex;
                margin : 5px 0;
                .mnemonic {
                    border-left: 3px solid red;
                    padding: 5px;
                }
                .name {
                    padding: 5px;
                }
            }
        }
    }
    ${({column})=> column? `
        flex-direction: column;
        span {
            width : fit-content;
            font-size: 16px;
            background-color: rgb(186, 206, 235);
            padding: 2px;
            border-radius: 15px;
            margin: 5px 0;
            span {
                margin : 0 15px 0;
            }
            i {
                padding : 5px;
            }
        }
        div {
            input {
                width : 100%;
            }
        }
    ` : `
        span {
            background-color: rgb(186, 206, 235);
            padding: 0 5px;
            border-radius: 15px;
            margin-right: 10px;
            span {
                
            }
            i {
                padding : 5px;
            }
        }
    `};
`
export const KWSContainer = styled('div')<{}>
`    
    ::after, 
    ::before {
        box-sizing: border-box;
    }

    {
        position: relative;
        text-align: left;
        width: 100%;
    }
    .disable_ms {
        pointer-events: none;
        opacity: 0.5;
    }
    .display-none {
        display: none;
    }
    .searchWrapper {
        border-radius: 4px;
        padding: 5px;
        min-height: 22px;
        position: relative;
    }
    input {
        border: none;
        margin-top: 3px;
        background: transparent;
    }
    input:focus {
        outline: none;
    }
    .chip {
        padding: 4px 10px;
        background: #0096fb;
        margin-right: 5px;
        margin-bottom: 5px;
        border-radius: 11px;
        display: inline-flex;
        align-items: center;
        font-size: 13px;
        line-height: 19px;
        color: #fff;
        white-space: nowrap;
    }
    .closeIcon {
        height: 13px;
        width: 13px;
        float: right;
        margin-left: 5px;
        cursor: pointer;
    }
    .optionListContainer {
        position: absolute;
        width: 100%;
        background: #fff;
        border-radius: 4px;
        margin-top: 1px;
        z-index: 99999;
    }
    ul {
        display: block;
        padding: 0;
        margin: 0;
        border: 1px solid #ccc;
        border-radius: 4px;
        max-height: 250px;
        overflow-y: auto;
    }
    li {
        padding: 10px 10px;
    }
    li:hover {
        background: #0096fb;
        color: #fff;
        cursor: pointer;
    }
    .checkbox {
        margin-right: 10px;
    }
    .singleSelect {
        padding-right: 20px;
    }
    .groupHeading {
        color: #908e8e;
        pointer-events: none;
        padding: 5px 15px;
    }
    li.groupChildEle {
        padding-left: 30px;
    }
    .icon_down_dir {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        width: 14px;
    }
    .icon_down_dir:before { 
        content: '\e803'; 
    }
    .custom-close {
        display: flex;
    }
`