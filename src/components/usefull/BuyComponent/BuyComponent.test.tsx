import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BuyComponent from './BuyComponent';

describe('<BuyComponent />', () => {
  test('it should mount', () => {
    render(<BuyComponent />);
    
    const buyComponent = screen.getByTestId('BuyComponent');

    expect(buyComponent).toBeInTheDocument();
  });
});