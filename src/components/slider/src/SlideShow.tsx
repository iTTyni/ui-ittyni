import * as React from 'react';
import styled from 'styled-components';
import {Images, Arrows, Indicators, Thumbnails} from './components'
const images = [
          "https://raw.githubusercontent.com/quanlieu/react-image-show/master/dev/images/m02.png",
          "https://raw.githubusercontent.com/quanlieu/react-image-show/master/dev/images/m03.png",
          "https://raw.githubusercontent.com/quanlieu/react-image-show/master/dev/images/m04.png",
          "https://raw.githubusercontent.com/quanlieu/react-image-show/master/dev/images/m05.png"
        ]
export default function App(){
  const [activeSliderIndex, setActiveSliderIndex] = React.useState<number>(0)
  return(
    <div>
      <StyledSlideShow className="slide-show slide-show-size">
        <Images 
          imageSource={images[activeSliderIndex]}
        />

        <Arrows onRighClick={()=>console.log("right")} onLeftClick={()=>console.log("left")}/>

        <Indicators 
          count={4} 
          activeIndicator={activeSliderIndex} 
          onClick={(i:number)=>setActiveSliderIndex(i)} />

      </StyledSlideShow>
      <StyledSlideShow className="slide-show">
        <Thumbnails images={images} activeThumbnail={activeSliderIndex} />
      </StyledSlideShow>
    </div>
  )
}

const StyledSlideShow = styled('div')`
  user-select: none;
  box-sizing: border-box;
  margin: auto;
  position: relative;
  width: 100%;
`
