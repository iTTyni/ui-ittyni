import * as React from 'react'
import {Card} from '../../../src/components/card';
import {Meta, Story} from '@storybook/react';

const meta : Meta = {
  title : "components/card",
  component: Card
}

export default meta;


const Template : Story = args => <Card {...args} />


export const Default = Template.bind({});


Default.args = {
  title : "default card"
}