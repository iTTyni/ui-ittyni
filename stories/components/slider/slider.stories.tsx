import * as React from 'react';
import {Meta, Story} from "@storybook/react"
import {Slider} from '../../../src/components'

const meta: Meta = {
  title : "components/Slider",
  component: Slider
}


export default meta;

const Template : Story = args => <Slider {...args} />

export const Default = Template.bind({})


Default.args = {
  title: "example of images"
}
