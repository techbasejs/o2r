import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductGrid from "./ProductGrid";
import products from "../data/productData";

test('renders grid of products', () => {
  render(<ProductGrid products={products}  />);
  const tiles = screen.queryAllByTestId(/productTile/i);
  expect(tiles).toHaveLength(7);
});
