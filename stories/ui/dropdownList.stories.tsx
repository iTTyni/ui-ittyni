import * as React from 'react';
import {Meta, Story} from '@storybook/react'
import { DropdownListStyled } from '../..';

const meta : Meta = {
    title: 'ui/dropdowns/dropdownList',
    component: DropdownListStyled
}

export default meta;


export const dropdownStory: Story = args =>
    <DropdownListStyled {...args}>
        <ul>
            <li>
                <div>example 1 </div>
                <div>example 4 </div>
                <div>example 3 </div>
                <div>example 2 </div>
            </li>
        </ul>
    </DropdownListStyled>

const dropdownListStyled = dropdownStory.bind({});