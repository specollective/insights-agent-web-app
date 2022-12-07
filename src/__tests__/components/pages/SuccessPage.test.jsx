import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import SuccessPage from 'components/pages/SuccessPage';

it('renders success message', () => {
  render(
    <Router>
      <SuccessPage />
    </Router>
  );
  expect(screen.getByText('Thank you for providing your data and helping us build the future of technology - for everyone.')).toBeInTheDocument();
});
