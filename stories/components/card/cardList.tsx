import { Meta, Story } from '@storybook/react';
import * as React from 'react';
import { CardList } from '../../../src/components/card';




const meta: Meta = {
    title: 'components/cardList',
    component: CardList
};


export default meta;


const Template: Story = args => <CardList {...args} />


export const Default = Template.bind({});

Default.args = {
    tile: 'card list',
}