import React, { Children } from 'react';
import { Meta, Story } from '@storybook/react';
import  Modal  from '../../../src/components/modal/src';
const meta: Meta = {
  title: 'components/modal',
  component: Modal
};


export default meta;

const Template: Story<any> = args => <Modal {...args} />

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
    title : "title goes here"
};
