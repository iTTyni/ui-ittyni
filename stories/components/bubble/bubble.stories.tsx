import * as React from 'react'
import {Meta, Story} from '@storybook/react'
import {Bubble} from '../../../src/components/bubble'

const meta: Meta = {
  title : 'components/bubble',
  component: Bubble, 
  argTypes: {
    bgColor: {
      control : {type: "color"}
    },
    selectedBgColor: {
      control : {type: "color"}
    },
    color: {
      control : {type: "color"}
    },
  }
}

export default meta;

const Template: Story = args => <Bubble {...args}>default</Bubble>

export const Default = Template.bind({});

Default.args = {
  children : 'default',
  bgColor: '#FFFFFF',
  bordered: true,
  isSelected: true,
  color: '#FFFFFF',
  selectedBgColor: '#FFFFFF',
  isDisabled: false
}
