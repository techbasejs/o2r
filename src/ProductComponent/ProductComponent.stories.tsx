import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProductComponent from './ProductComponent';

export default {
    title: 'Example/ProductComponent',
    component: ProductComponent,
} as ComponentMeta<typeof ProductComponent>;

const Template: ComponentStory<typeof ProductComponent> = (args) => <ProductComponent {...args} />;

export const Default = Template.bind({});

Default.args = { id: 'story1',
    name: '2GB',
    description: 'This is to test the storybook version 02'
};
