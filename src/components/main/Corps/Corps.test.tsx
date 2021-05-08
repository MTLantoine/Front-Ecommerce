import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Corps from './Corps';

describe('<Corps />', () => {
  test('it should mount', () => {
    render(<Corps />);
    
    const corps = screen.getByTestId('Corps');

    expect(corps).toBeInTheDocument();
  });
});