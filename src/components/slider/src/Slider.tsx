import * as React from 'react';
import styled from 'styled-components';
import {Images, Arrows, Indicators, Thumbnails} from '..'
const images = [
          "https://uniqueshop.ma/3593/the-ordinary-lactic-acid-10ha-30ml.jpg",
          "https://univers-1d470.kxcdn.com/9810-square_large_default/the-ordinary-the-ordinary-aha-30-bha-2-solution-de-peeling-30ml-produits-americains.jpg",
          "https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dwb5457f50/Images/products/The%20Ordinary/rdn-the-bright-set.png?sw=900&sh=900&sm=fit",
          "https://raw.githubusercontent.com/quanlieu/react-image-show/master/dev/images/m05.png"
        ]
export function Slider(){
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
