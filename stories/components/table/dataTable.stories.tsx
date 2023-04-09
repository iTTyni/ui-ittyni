import * as React from 'react';
import {Meta, Story} from '@storybook/react';
import {DataTable} from '../../../src/components/table';


const meta: Meta = {
    title: 'components/dataTable',
    component : DataTable,
};

export default meta;


const Template: Story = args=><DataTable {...args} />

export const Default = Template.bind({});


Default.args = {
    data : [
        {
            name : 'hylarunique',
            molecule: 'hylaronunique 50',
            brand : 'The ordinary'
        }
    ]
}
