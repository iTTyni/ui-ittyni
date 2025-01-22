import * as React from 'react';
import {Meta, Story} from '@storybook/react';
import {StyledCardContainer, StyledCardSection} from '../..'

const cardMeta : Meta = {
  title : 'ui/card',
  component: StyledCardContainer,
  parameters: {
    width: {
      values: [{
        name: "width",
        value: "500px"
      }]
    }
  }
}


export default cardMeta;

const cardTemplate : Story = args => 
  <StyledCardContainer {...args}>
    this card container
  </StyledCardContainer>
const cardSectionTemplate : Story= args =>
  <StyledCardSection {...args}>section</StyledCardSection>
const cardExampleTemplate : Story = ({containerArgs, sectionArgs}) => 
  <StyledCardContainer {...containerArgs}>
    <StyledCardSection {...sectionArgs}>
      section 1
    </StyledCardSection>
  </StyledCardContainer>
export const CardContainer = cardTemplate.bind({})
export const CardSection = cardSectionTemplate.bind({})
export const CardExample = cardExampleTemplate.bind({})

CardContainer.args = {
  width: '400px'
}

CardExample.args ={
  containerArgs: {
    width : '400px'
  },
  sectionArgs: {
    width: '100px'
  }
}

