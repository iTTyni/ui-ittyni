import React, { ReactComponentElement } from 'react';
import styled from 'styled-components';

interface HeaderProps {
  icon:any; 
  title: any;
  description: any;
}

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
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
  margin-bottom: 20px;
`;

export const ContentHeader: React.FC<HeaderProps> = ({ icon, title, description }) => {

  return (
    <HeaderContainer>
      <IconContainer>
        {icon}
      </IconContainer>
      <div>
        <h4>{title}</h4>
        <Description>
          {description}
        </Description>
      </div>
    </HeaderContainer>
  );
};
