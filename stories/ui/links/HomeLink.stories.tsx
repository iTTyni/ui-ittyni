import React, { Children } from 'react';
import { Meta, Story } from '@storybook/react';
import { Links } from '../../../src/ui/index';
import { MemoryRouter } from 'react-router-dom';


const meta: Meta = {
  title: 'ui/Links/HomeLink',
  component: Links.HomeLink,
  decorators : [(Story) => (<MemoryRouter><Story/></MemoryRouter>)]
};


export default meta;

const Template: Story<any> = args => <Links.HomeLink to="#">home Link</Links.HomeLink>;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
