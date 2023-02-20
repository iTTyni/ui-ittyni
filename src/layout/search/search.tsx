import React, { FC } from 'react'
import { device, styled } from '../../theme'
// import { ReactComponent as Marker } from '../../assets/icons/maps-marker.svg';
// import { ReactComponent as Microscope } from '../../assets/icons/microscope.svg';


export const Search: FC<any> = ({ }) => {
    // show/hide search options
    const [showOptions, setShowOptions] = React.useState<boolean>(false)
    return (
        <SearchContainer showOptions={showOptions} style={{width: "70%", marginLeft: "15%"}}>
            <div style={{color: "#50b750", fontSize: "x-large", textDecoration: 'underline', padding: "15px 0"}}>
                Paramedical
            </div>
            <div className="search">
                <i className="fa fa-search font-green" />
                <input placeholder="trouver analyses" />
            </div>
            <div style={{padding: "15px", color: "#50b750", fontSize: "x-large"}}>
                <span><i className='fas fa-shopping-cart'/></span>
            </div>
              
        </SearchContainer>
    )
}

export const SearchContainer = styled('div') <
  { show?: boolean, showOptions? : boolean }
>
`
  width: 50%;
  position: relative;
  display: grid;
  grid-template-columns: 10% 75% 10%;
  justify-content: space-around;
  margin: 20px 50px;
  border-radius: 15px;
  .menu {
    display : none;
  }
  .search {
    border: 2px solid #000000;
    position: relative;
    display: flex;
    padding: 8px;
    border-radius: 15px;
    background-color: rgba(34,34,34,.05);
    :focus {box-shadow: 2px 2px 2px 2px #e1e1e1;}
    i {
      color: #c4cace;
      left: auto;
      float: left;
      position: absolute;
      margin: 7px 2px 4px 10px;
      z-index: 3;
      width: 16px;
      text-align: center;
      font-size: 16px;
      top: 20%;
    } 
    input {
      background-color: rgba(0,0,0,0);
      border: none;
      padding-right: 33px;
      padding-left: 35px;
      padding-bottom: 10px;
      padding-top: 10px;
      color: #212121;
      outline: 0;
      width: 90%;
    }
  }
  .options {
    display: grid;
    grid-template-columns: 50% 50%;
    padding: 8px;
    border-radius: 15px;
    .location {
      position: relative;
      border-right: 1px solid #e1e1e1;
      svg {
        position: absolute;
        top: 10%;
        color: #616161;
        opacity: .8;
      }
      input {
        border: none;
        padding-right: 33px;
        padding-left: 25px;
        padding-bottom: 10px;
        padding-top: 10px;
        color: #212121;
        outline:0;
        width: 100px;
      }
    }
    .choose {
      position : relative;
      margin-left: 20px;
      svg {
        position: absolute;
        top: 10%;
        color: #616161;
        opacity: .8;
      }
      input {
        border: none;
        padding-right: 33px;
        padding-left: 25px;
        padding-bottom: 10px;
        padding-top: 10px;
        color: #212121;
        outline: 0;
        width: 100px;
      }
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