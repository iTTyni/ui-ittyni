import * as React from 'react';
import styled from 'styled-components';

export interface IcoProps {
  className?: string;
  svgString: string;
  color?: string;
  width?: string;
  height?: string;
  styles?: string;
}

const IcoRendererBase = ({ className, svgString }: IcoProps) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{ __html: svgString }}
  />
);

export const IcoRenderer = styled(IcoRendererBase)`
  width: ${({ width }) => width || '70px'};
  height: ${({ height }) => height || '45px'};

  ${({ styles }) => styles}

  svg g, svg path {
    fill: ${({ color }) => color || 'black'};
  }
`;
