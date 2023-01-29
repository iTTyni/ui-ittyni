import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Bubbles } from '../../src/ui/index';


const meta: Meta = {
    title: 'ui/bubble/badge',
    component: Bubbles.Bubble,
    argTypes: {
        color: { control: 'color' },
        bordered: { control: 'boolean' },
        selectedBgColor: { control: 'color' },
        selected: { control: 'boolean' },
        bgColor: { control: 'color' }
    }
};


export default meta;

const Template: Story<any> = args =>
    <Bubbles.Bubble {...args} > Bubble </Bubbles.Bubble>;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
    color: '#131722',
    bordered: false,
    selectedBgColor: '',
    selected: false,
    bgColor: '#f0f3fa'
};
