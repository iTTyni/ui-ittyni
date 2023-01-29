import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Links } from '../../../src/ui/index';


const meta: Meta = {
  title: 'ui/Links/LoginLinkIcon',
  component: Links.LoginLinkIcon
};


export default meta;

const Template: Story<any> = args => <Links.LoginLinkIcon {...args} >Login Link Icon</Links.LoginLinkIcon>;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
