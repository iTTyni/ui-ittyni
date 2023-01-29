import React, { Children } from 'react';
import { Meta, Story } from '@storybook/react';
import { Links } from '../../../src/ui/index';
import { MemoryRouter, Router } from 'react-router-dom';


const meta: Meta = {
  title: 'ui/Links/LoginLink',
  component: Links.LoginLink,
  decorators : [(Story) => (<MemoryRouter><Story/></MemoryRouter>)]
};


export default meta;

const Template: Story<any> = args => <Links.LoginLink to="#">Login Link</Links.LoginLink> ;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
