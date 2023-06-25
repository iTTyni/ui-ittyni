import * as React from 'react';
import {Meta, Story} from '@storybook/react'
import { DropdownMenuStyle } from '../..';

const meta : Meta = {
    title: 'ui/dropdowns/dropdownMenu',
    component: DropdownMenuStyle
}

export default meta;


export const dropdownStory: Story = args =><DropdownMenuStyle {...args}/>

const dropdownMenuStyled = dropdownStory.bind({});