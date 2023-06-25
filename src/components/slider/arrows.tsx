import * as React from 'react'
import styled from 'styled-components';

export const Arrow: React.FC<{direction: "left"|"right"}> = ({direction})=>{
  const backArrow = '8.165,25 25,0 0,25 25,50 8.165,25';
  const nextArrow = '16.835,25 0,50 25,25 0,0 16.835,25';

  const points = direction === 'left'?
    backArrow
    : nextArrow;

  return(
    <svg
      width="25" height="50" viewBox="0 0 25 50"
    >
      <polyline fill="#8B8B8B" points={points} />
    </svg>
  )
};

export const Arrows: React.FC<{
  onLeftClick: ()=>void
  onRighClick: ()=>void
}>= ({onLeftClick, onRighClick})=>{


  console.log("Arrows rendered")
  return(
    <StyledArrows>
      <span className="ss-active-left" onClick={onLeftClick}>
        <Arrow direction="left" />
      </span>
      <span className="ss-arrow-right" onClick={onRighClick}>
        <Arrow direction="right" />
      </span>
    </StyledArrows>
  )
}

const StyledArrows = styled('div')`
  position: absolute;
  width: inherit;
  top: 50%;
  transform: translateY(-50%);
  display: block;

  .ss-arrow-right, .ss-active-left {
    cursor: pointer;
  }

  .ss-arrow-right { float: right; }
  .ss-active-left { float: left; }

`
