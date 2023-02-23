import * as React from 'react'
import styled from 'styled-components'

export const Indicators: React.FC<{
  count : number,
  onClick: (i: number)=>void,
  activeIndicator: number
}>=({count, onClick, activeIndicator})=>{

  const [indicators, setIndicators] = React.useState<any[]>()

  React.useEffect(
    ()=>{
      if(count){
        let indicatorsTmp = [];
        for(let i=0; i<count; i++){
          indicatorsTmp.push( 
            <div key={i} onClick={()=>onClick(i)} data-index={i}>
              <span className={i=== activeIndicator? "ss-active": ""} />
            </div>
          )  
        }

        setIndicators(indicatorsTmp);
      }
    },[count, activeIndicator]
  )

  console.log("indicators rendered")
  return (
    <StyledIndicators>
      {indicators}
    </StyledIndicators>
  )
}

const StyledIndicators = styled('div')`
  position: relative;
  top: -40px;
  padding: 0;
  text-align: center;
  height: 0;

  > div {
    display: inline-block;
    cursor: pointer;
    > span {
      display : inline-block;
      width: 10px;
      height: 10px;
      border: 1px solid white;
      border-radius: 50%;
      margin: 0 5px;
      padding: 0;
      background: transparent;
      &.ss-active {
        background-color: white;
      }
    }
  }

`
