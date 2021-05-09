import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ListArticleComponent from './ListArticleComponent';

describe('<ListArticleComponent />', () => {
  test('it should mount', () => {
    render(<ListArticleComponent />);
    
    const listArticleComponent = screen.getByTestId('ListArticleComponent');

    expect(listArticleComponent).toBeInTheDocument();
  });
});