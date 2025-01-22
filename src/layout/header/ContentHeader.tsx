import React, { ReactComponentElement } from 'react';
import styled from 'styled-components';

interface HeaderProps {
  icon: any;
  title: any;
  description: any;
  subheader1?: string;
  subheader2?: string;
}

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  margin-top: 30px;
`;

const IconContainer = styled.div`
  width: 100px;
  height: 100px;
  margin-right: 10px;
  background-color: #f0f0f0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
  color: #007bff;
`;

const Description = styled.p`
  font-size: 1em;
  color: #666;
  margin: 0;
`;

const Subheader = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  font-size: 1.2em;
  color: #333;
`;

const Text1 = styled.span`
  margin-right: 5px;
`;

const Text2 = styled.span`
  font-weight: bold;
`;

export const ContentHeader: React.FC<HeaderProps> = ({
  icon,
  title,
  description,
  subheader1,
  subheader2,
}) => {
  return (
    <HeaderContainer>
      <IconContainer>{icon}</IconContainer>
      <div>
        <h4 style={{margin: 0}}>{title}</h4>
        {subheader1 && (
          <>
            <Subheader>
              <Text1>{subheader1}</Text1>
              <Text2>{subheader2}</Text2>
            </Subheader>
          </>
        )}
        <Description>{description}</Description>
      </div>
    </HeaderContainer>
  );
};
