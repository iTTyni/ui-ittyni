import * as React from 'react';
import {Meta, Story} from '@storybook/react';
import Datalist from '@ui/src/components/table/dataTable';
import { Header } from '@ui/src/layout/header';


const meta: Meta = {
    title: 'components/dataTable',
    component : Datalist,
};

export default meta;


const Template: Story = args=><Datalist  data={[]}  />

export const Default = Template.bind({});


Default.args = {
    data : [
        {
            name : 'hylarunique',
            molecule: 'hylaronunique 50',
            brand : 'The ordinary'
        }
    ],
    headers: [{
        name: 'name'
    }]
}
