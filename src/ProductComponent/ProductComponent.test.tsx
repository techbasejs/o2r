import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductComponent from "./ProductComponent";

test('render product component', () => {
  render(<ProductComponent id="testId" name="2GB" description="test description" />);
  const descElement = screen.getByText(/test description/i);
  expect(descElement).toBeInTheDocument();
});
