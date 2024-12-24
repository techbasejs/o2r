import React from 'react';
import withMock from 'storybook-addon-mock';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import products from './../data/productData';

import RecommendedProducts from './RecommendedProducts';

export default {
    title: 'Example/RecommendedProducts',
    component: RecommendedProducts,
    decorators: [withMock]
} as ComponentMeta<typeof RecommendedProducts>;

const Template: ComponentStory<typeof RecommendedProducts> = (args) => <RecommendedProducts />;

export const Default = Template.bind({});

const mockParameters =  { mockData: [
        {
            url: 'http://localhost:8080/recommended_products',
            method: 'GET',
            status: 200,
            response: {products: products},
        }]}

Default.args = {};
Default.parameters=mockParameters;
