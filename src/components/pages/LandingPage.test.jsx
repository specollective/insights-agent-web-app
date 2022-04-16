import React from 'react';
import { render, screen } from '@testing-library/react';
import LandingPage from './LandingPage';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

it('renders page heading', () => {
  render(<LandingPage />);
  expect(screen.getByText('Sign up to participate in our study!'))
    .toBeInTheDocument();
});

it('renders footer heading', () => {
  render(<LandingPage />);
  expect(screen.getByText(/\$XXX for participating in our research/))
    .toBeInTheDocument();
});
