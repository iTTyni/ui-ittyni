import { Meta, Story } from '@storybook/react';
import * as React from 'react';
import * as mobile_1 from '../../src/screen/product_details/product_details_mobile_1.jpg';
import * as desktop_1 from '../../src/screen/product_details/product_details_desktop_1.png';
import * as desktop_2 from '../../src/screen/product_details/product_details_desktop_2.png';
import * as desktop_2_description from '../../src/screen/product_details/product_details_desktop_2_with_description.jpg';
import * as desktop_2_review from '../../src/screen/product_details/product_details_desktop_2_with_review.jpg';
import ProductDetailsScreen from '../../src/screen';


const meta: Meta = {
    title: 'srceen/product_details',
    component: ProductDetailsScreen
};

export default meta;

const Template: Story = args => <ProductDetailsScreen {...args} />;


export const Mobile_1 = Template.bind({});
export const Desktop_1 = Template.bind({});
export const Desktop_2 = Template.bind({});
export const Desktop_2_REVIEW = Template.bind({});
export const Desktop_2_DESCRIPTION = Template.bind({});

Mobile_1.args = {
    image: mobile_1
}
Desktop_1.args = {
    image: desktop_1
}
Desktop_2.args = {
    image: desktop_2
}
Desktop_2_DESCRIPTION.args = {
    image: desktop_2_description
}
Desktop_2_REVIEW.args = {
    image: desktop_2_review
}