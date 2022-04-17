import React from 'react';
import { render, screen } from '@testing-library/react';
import SuccessPage from './SuccessPage';

it('renders success message', () => {
  render(<SuccessPage />);
  expect(screen.getByText('Your application has successfully been submitted.'))
    .toBeInTheDocument();
});
