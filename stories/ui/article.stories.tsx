import React, { Children } from 'react';
import { Meta, Story } from '@storybook/react';
import { Article } from '../../src/ui/index';
import {theme} from '../../src/theme'

const meta: Meta = {
  title: 'ui/articles/container',
  component: Article.Container
};


export default meta;

const Template: Story<any> = args => 
    <Article.Container {...args} >
      <Article.HeaderContainer >
        <Article.Header>header</Article.Header>
      </Article.HeaderContainer>
        
    </Article.Container>;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
