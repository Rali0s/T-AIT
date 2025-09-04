import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders logo text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Layer-4 ReverbNet/i);
  expect(linkElement).toBeInTheDocument();
});
