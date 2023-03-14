import * as React from 'react';
import {Meta, Story} from '@storybook/react'
import { DropdownMenuStyle } from '../../src/ui';

const meta : Meta = {
    title: 'ui/dropdowns',
    component: DropdownMenuStyle
}

export default meta;


export const dropdownStory: Story = args =><DropdownMenuStyle {...args}/>

const dropdownMenuStyled = dropdownStory.bind({});