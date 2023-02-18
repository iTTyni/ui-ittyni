import { Meta, Story } from '@storybook/react';
import * as React from 'react';
import ProductDetailsScreen from '../../src/screen';

// import images
import * as mobile_1 from '../../src/screen/product_details/product_details_mobile_1.png';
import * as mobile_2 from '../../src/screen/product_details/product_details_mobile_2.png';
import * as desktop_1 from '../../src/screen/product_details/product_details_desktop_1.png';
import * as desktop_2 from '../../src/screen/product_details/product_details_desktop_2.png';
import * as desktop_2_description from '../../src/screen/product_details/product_details_desktop_2_with_description.jpg';
import * as desktop_2_review from '../../src/screen/product_details/product_details_desktop_2_with_review.jpg';
import * as mobile_3 from '../../src/screen/product_details/etsy_product_details-mobile.png';
import * as desktop_3 from '../../src/screen/product_details/etsy_product_details-desktop.png';


const meta: Meta = {
    title: 'srceen/product_details',
    component: ProductDetailsScreen
};

export default meta;

const Template: Story = args => <ProductDetailsScreen {...args} />;


export const Mobile_1 = Template.bind({});
export const Mobile_2 = Template.bind({});
export const Mobile_3 = Template.bind({});
export const Desktop_1 = Template.bind({});
export const Desktop_2 = Template.bind({});
export const Desktop_2_REVIEW = Template.bind({});
export const Desktop_2_DESCRIPTION = Template.bind({});
export const Desktop_3 = Template.bind({});

Mobile_1.args = {
    image: mobile_1
}
Mobile_2.args = {
    image: mobile_2
}
Mobile_3.args = {
    image: mobile_3
}
Desktop_1.args = {
    image: desktop_1
}
Desktop_2.args = {
    image: desktop_2
}
Desktop_2_REVIEW.args = {
    image: desktop_2_review
}
Desktop_2_DESCRIPTION.args = {
    image: desktop_2_description
}
Desktop_3.args = {
    image: desktop_3
}