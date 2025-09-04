import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders AI Tactical Feedback heading', () => {
  render(<App />);
  const heading = screen.getByText(/AI Tactical Feedback/i);
  expect(heading).toBeInTheDocument();
});
