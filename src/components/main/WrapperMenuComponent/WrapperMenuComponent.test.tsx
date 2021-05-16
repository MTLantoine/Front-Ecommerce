import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import WrapperMenuComponent from './WrapperMenuComponent';

describe('<WrapperMenuComponent />', () => {
  test('it should mount', () => {
    render(<WrapperMenuComponent />);
    
    const wrapperMenuComponent = screen.getByTestId('WrapperMenuComponent');

    expect(wrapperMenuComponent).toBeInTheDocument();
  });
});