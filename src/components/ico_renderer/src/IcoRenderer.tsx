import * as React from 'react';
import styled from 'styled-components';

export interface IcoProps {
  className?: string;
  viewBox: string;
  groups?: {
    attributes: { [key: string]: string };
    paths: {
      d: string;
    }[];
  }[];
  paths?: {
    d: string;
  }[];
  color?: string;
  width?: string;
  height?: string;
  styles?: string;
}

export const IcoRenderer = styled(
  ({ className, viewBox, groups, paths }: IcoProps) => (
    <svg
      className={className}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
    >
    {groups&& 
        groups.map((group, groupIndex) => (
          <g key={groupIndex} {...group.attributes}>
            {group.paths.map((path, pathIndex) => (
              <path d={path.d} key={pathIndex} />
            ))}
          </g>
        ))
      }
      {
        paths &&
        paths.map((path, pathIndex) => (
          <path d={path.d} key={pathIndex} />
        ))
      } 
    </svg>
  )
).attrs({ className: '' })`
  width: ${({ width }) => width || '70px'};
  height: ${({ height }) => height || '45px'};

  ${({ styles }) => styles}

  g, path {
    fill: ${({ color }) => color || 'black'};
  }
`;

// Example usage:
// const svgIcon = FormatSvgIcon(svgString);
// <IcoRenderer {...svgIcon} color="red" width="100px" height="100px" />
