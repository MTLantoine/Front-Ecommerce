import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductPageComponent from './ProductPageComponent';

describe('<ProductPageComponent />', () => {
  test('it should mount', () => {
    render(<ProductPageComponent />);
    
    const productPageComponent = screen.getByTestId('ProductPageComponent');

    expect(productPageComponent).toBeInTheDocument();
  });
});