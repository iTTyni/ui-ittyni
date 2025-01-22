import * as React from 'react'
import {Meta, Story} from '@storybook/react'
import { DropdownListWithInput } from '../../..'


const dropdownListWithInputMeta: Meta = {
    title: 'components/dropdowns/dropdownMenuWidthInput',
    component: DropdownListWithInput
}

export default dropdownListWithInputMeta;

const dropdownMenuStory: Story = args => 
    <DropdownListWithInput {...args} >
        
            <li>
                <div>example 1</div>
                <div>example 2</div>
                <div>example 3</div>
            </li>
        
    </DropdownListWithInput>
    
export const Default = dropdownMenuStory.bind({})

Default.args = {
    customStyles:{width: '400px'},
    label: 'organizmes',

}
