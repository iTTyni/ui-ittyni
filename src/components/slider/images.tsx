import * as React from 'react';
import styled from 'styled-components';




export const Images : React.FC<{imageSource: string}> = ({imageSource})=>{


  return(
    <StyledImages>
      <div className="ss-images-track">
        <div className="ss-slide-image" >
        <img src={imageSource} />
        </div>
      </div>
    </StyledImages>
  )
}


const StyledImages = styled('div')`
  position : relatrive;
  overflow: hidden;
  margin: auto;
  width: 100%;
  height: inherit;

  .ss-images-track {
    white-space : nowrap;
    width: inherit;
    height: inherit;
    transition: all 500ms ease-out;
  }

  .ss-no-transition {
    transition-property: none;
  }

  .ss-slide-image {
    display : inline-block;
    text-align: center;
    vertial-align : top;
    transition: all 500ms ease-out;
    width: inherit;
    height: inherit;

    & > img {
      width : inherit;
      height: inherit;
    }
  }

  .ss-fixed-height {
    .ss-slide-image {
      height : inherit;
      overflow : hidden;
      
      &::before {
        content: "";
        margin-left: -100%;
      }
      &::after {
        content: "";
        margin-right: -100%;
      }
      > img {
        width : auto;
        height: inherit;
      }
    }
  }
`
