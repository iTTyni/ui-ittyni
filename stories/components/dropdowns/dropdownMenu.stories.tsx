import * as React from 'react'
import {Meta, Story} from '@storybook/react'
import { DropdownMenu } from '../../..'


const dropdownMeta: Meta = {
    title: 'components/dropdownMenu',
    component: DropdownMenu
}

export default dropdownMeta;

const dropdownMenuStory: Story = args => 
    <DropdownMenu {...args} />
    
export const dropdownMenu = dropdownMenuStory.bind({})

dropdownMenu.args = {}
