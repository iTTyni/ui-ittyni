import * as React from 'react';
import styled from 'styled-components';



export const Thumbnails: React.FC<any> = ({images, activeThumbnail})=>{


  return(
    <StyledThumbnails>
      <div className="ss-thumbnails-track">
        {images?.map((v:any,i:any)=>{
          return (
            <div className="ss-thumbnail" onClick={()=>console.log("thumbnail clicked")}>
              <img src={v} className={activeThumbnail === i? "ss-active": ""} />
            </div>
          )
        })}
      </div>      
    </StyledThumbnails>
  )
}

const StyledThumbnails = styled('div')`
  overflow: hidden;
  margin: auto;

  .ss-thumbnails-track {
    white-space: nowrap;
    transition: all 500ms ease-out;
    text-align: center;
  }

  .ss-thumbnail {
    display : inline-block;
    padding: 3px;
    cursor: pointer;

    > img {
      width: 150px;
      height: 100px;
      vertical-align: middle;
      &.ss-active {
        outline: 3px solid #337ab7;
      }
    }
  }

  @media only screen and (min-width: @sm) {
    .ss-thumbnail {
      width: 15%;
    }
  }
`
