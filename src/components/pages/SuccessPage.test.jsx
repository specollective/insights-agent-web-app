import React from 'react';
import { render, screen } from '@testing-library/react';
import SuccessPage from './SuccessPage';

it('renders success message', () => {
  render(<SuccessPage />);
  expect(screen.getByText('Thank you for participating in the survey'))
    .toBeInTheDocument();
});
