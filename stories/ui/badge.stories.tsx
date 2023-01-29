import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Badge } from '../../src/ui/index';


const meta: Meta = {
  title: 'ui/badge/badge',
  component: Badge.Badge,
  argTypes : {
    bgcolor : { control : 'color', source : '<Badge ></Badge>'}
  }
};


export default meta;

const Template: Story<any> = args => <Badge.Badge {...args} > Badge </Badge.Badge>;

export const Blue = args => <Badge.Badge {...args}>Blue</Badge.Badge>

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
    bgcolor : 'red'
};

Blue.args = {
    bgcolor : "blue"
}
