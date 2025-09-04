import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders logo text', () => {
  render(<App />);
  const linkElement = screen.getByText(/LAYER-4 TERMINAL/i);
  expect(linkElement).toBeInTheDocument();
});
