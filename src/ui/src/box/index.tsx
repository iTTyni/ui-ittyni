import { device } from "../../../theme";
import styled from "../../../theme/styled-components";

export const SearchContainer = styled('div') <
  { show?: boolean, showOptions? : boolean }
>
`
  margin-bottom: 50px;
  position: relative;
  display: grid;
  padding: 10px 50px;
  grid-template-columns: 40% 40%;
  border-bottom: 1px solid #f1f4f6;
  border-top: 1px solid #f1f4f6;
  .menu {
    display : none;
  }
  .options {
    display: grid;
    grid-template-columns: 50% 50%;
    .location {
      position: relative;
      svg {
        position: absolute;
        top: 30%;
        color: #616161;
        opacity: .8;
        left: 2%;
      }
      input {
        border: none;
        background: #f1f4f6;
        padding-right: 33px;
        padding-left: 25px;
        padding-bottom: 10px;
        padding-top: 10px;
        color: #212121;
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
      }
    }
    .choose {
      position : relative;
      input {
        border: none;
        background: #f1f4f6;
        padding-right: 33px;
        padding-left: 25px;
        padding-bottom: 10px;
        padding-top: 10px;
        color: #212121;
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
      }
      i {
        position: absolute;
        right: 20px;
        top: 20%;
      }
    }
  }
  
  .search {
    position: relative;
    display : flex;
    i {
      color: #c4cace;
      left: auto;
      right: 5px;
      float: right;
      position: absolute;
      margin: 7px 2px 4px 10px;
      z-index: 3;
      width: 16px;
      text-align: center;
      font-size: 16px;
      top: 10%;
    }
    input {
      border: none;
      background: #f1f4f6;
      padding-right: 33px;
      padding-left: 12px;
      padding-bottom: 10px;
      padding-top: 10px;
      color: #212121;
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
      width: 93%;
    }
  }
  ${device.mobile`
    grid-template-columns: 10% 80%;
    padding : 5px;
    .menu { 
      padding: 5px 5px 5px 0px;
      font-size: 25px;
      display: block;
      cursor : pointer;
      i {
        color : rgb(12, 92, 179);
      }
    }
    .options {
      display : ${({showOptions}:any)=>showOptions?'flex' : 'none'};
      flex-direction: column;
      position : absolute;
      background: white;
      min-height: 110px;
      top: 40px;
      padding: 10px;
      width : 90%;
      z-index: 9;
      margin-left: 5px;
      box-shadow: 0 3px 6px rgb(0 0 0 / 5%);
      .location { 
        margin-top : 10px;
        display: flex;
        input {
          width : 100%;
        }
       }
      .choose { 
        margin-top : 10px;
        display: flex;
        input {
          width : 100%;
        }
       }
    }
    .search {
      input {
        
      }
    }
  `}
  
  ${device.tablet`
    grid-template-columns: 50% 45%;
    padding : 10px;
    .menu {
      display : none;
    }
    .options {
      display: grid;
      grid-template-columns: 50% 50%;
      .location {
        margin-right: 5px;
        display: flex;
      }
      .choose {
        margin-right: 5px;
        display: flex;
      }
    }
    .search {
      display: flex;
    }
  `}
  
`
export const SearchIcon = styled.i`
  left: auto;
  right: 15px;
  float: right;
  position: absolute;
  margin: 7px 2px 4px 10px;
  z-index: 3;
  width: 16px;
  font-size: 25px;
  text-align: center;
`;
export const SearchInput = styled.input`
  padding-right: 33px;
  padding-left: 12px;
  padding-bottom: 10px;
  padding-top: 10px;

  @media (max-width: 768px) {
      width : 100% !important;
  }
`;

export const Menu = styled('div')`
    display: flex;
    height: 38px;
    flex: 1 1 auto;
    min-width: 0;
    margin-bottom : 10px;
    border : 1px solid grey;
    align-items: center;
    justify-content: space-between;
    div {
        div {
            padding: 0 10px 0 0;
            cursor: pointer;
            color: red;
            font-family: monospace;
            font-weight: 700;
        }
    }
`