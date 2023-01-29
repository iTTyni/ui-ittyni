import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Inputs } from '../../src/ui/index';


const meta: Meta = {
  title: 'ui/inputs/input',
  component: Inputs.Container,
  argTypes : {
    placeholder : { control : 'text'},
    value : { control : 'text'}
  }
};


export default meta;

const Template: Story<any> = args => 
    <Inputs.Container > <Inputs.Input {...args} /> </Inputs.Container>;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
    placeholder : 'default',
    value : 'defaultValue'
};
