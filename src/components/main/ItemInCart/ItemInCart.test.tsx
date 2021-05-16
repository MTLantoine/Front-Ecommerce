import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ItemInCart from './ItemInCart';

describe('<ItemInCart />', () => {
  test('it should mount', () => {
    render(<ItemInCart />);
    
    const itemInCart = screen.getByTestId('ItemInCart');

    expect(itemInCart).toBeInTheDocument();
  });
});