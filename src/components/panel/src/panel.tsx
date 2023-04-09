import * as React from 'react';
import { PanelContainer } from '../../../..';

interface IPanelProps {
    Header?: any
    subHeader?: any
    children: JSX.Element
    mainTitle?: string
    rightMenu?: any[]
    leftMenu?: any[]
    footer?: JSX.Element
}

export const Panel: React.FC<IPanelProps> = ({
    children, Header, subHeader, rightMenu, leftMenu, footer,
    mainTitle
}) => {
  return(
    <PanelContainer>
        {Header&&<div className='header'>{Header}</div>}
        {subHeader&&<div className='sub_header'>{subHeader}</div>}
        <div className='content'>
            {
              mainTitle&&
              <>
                <h2 className='title'>{mainTitle}</h2>
                <hr />
              </>
            }
              <div className='content_body' style={{display: rightMenu||leftMenu ? 'flex': 'block'}} >
                {rightMenu&&<div className='leftMenu'>left menu</div>}
                <div className='main'>{children}</div>
                {leftMenu&&<div className='rightMenu'>right menu</div>}
            </div>
        </div>
        {footer&&<div className='footer'>{footer}</div>}
    </PanelContainer>
  ) ;
};

