import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProductGrid from './ProductGrid';
import products from '../data/productData'

export default {
    title: 'Example/ProductGrid',
    component: ProductGrid,
} as ComponentMeta<typeof ProductGrid>;

const Template: ComponentStory<typeof ProductGrid> = (args) => <ProductGrid {...args} />;

export const Default = Template.bind({});

Default.args = { products: products };
