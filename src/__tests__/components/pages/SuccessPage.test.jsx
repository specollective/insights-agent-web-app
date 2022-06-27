import React from 'react';
import { render, screen } from '@testing-library/react';
import SuccessPage from 'components/pages/SuccessPage';

it('renders success message', () => {
  render(<SuccessPage />);
  expect(screen.getByText('Thank You!')).toBeInTheDocument();
});
