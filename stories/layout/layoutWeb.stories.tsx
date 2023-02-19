import * as React from 'react';
import { Meta, Story } from "@storybook/react";
import { LayoutWeb } from "../../src/layout"


const meta: Meta = {
    title: "layout/web",
    component: LayoutWeb,
}

export default meta;


const Template : Story = args => <LayoutWeb {...args} />

export const Default = Template.bind({});

Default.args = {
    title: "Layout Web",
}