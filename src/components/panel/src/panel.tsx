import * as React from 'react';
import { PanelContainerStyled } from '../../../..';

interface IPanelProps {
    Header?: any
    subHeader?: any
    children: JSX.Element
    footer?: JSX.Element
    customeStyles?: {
      withborder?: boolean
    }
}

export const Panel: React.FC<IPanelProps> = ({
    children, Header, subHeader, footer
}) => {
  return(
    <PanelContainerStyled>
        {Header&&<div className='header'>{Header}</div>}
        {subHeader&&<div className='sub_header'>{subHeader}</div>}
        <div className='content'>
            {children}
        </div>
        {footer&&<div className='footer'>{footer}</div>}
    </PanelContainerStyled>
  ) ;
};

