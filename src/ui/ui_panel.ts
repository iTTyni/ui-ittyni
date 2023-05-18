import {styled} from "../../";

export const PanelContainer = styled('div')<{

}>
` 
    background-color : white;
    margin : 0 0 15px 0;
    border: 1px solid #e1e1e1;
    padding: 5px;

    .header {
        h1 {
            padding: 15px;
            font-size : 1.125rem;
        }
    }
    .subheader {

    }
    .content {

    }
    .content_header {
        display: flex;
        width: inherit;
        justify-content: space-between;
        border-bottom: 1px solid lightgray;
        align-items: center;
        i {cursor: pointer;}
    }
    .title {
        color: #000000;
        font-size : 1rem;
        font-weight : bold;
        margin : 15px;
    }

    hr { margin : 5px 25px; }
    .leftMenu {

    }
    .rightMenu {

    }
    .main {

    }
    .footer {

    }

`
