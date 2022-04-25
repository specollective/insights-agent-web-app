import React from 'react';
import { render, screen } from '@testing-library/react';
import LandingPage from './LandingPage';
import i18nTest from 'utils/i18nTest'
import { I18nextProvider } from 'react-i18next'

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

it('renders page heading', () => {
  render(
    <I18nextProvider i18n={i18nTest}>
      <LandingPage />
    </I18nextProvider>
  );

  expect(screen.getByText('Sign up to participate in our study!'))
    .toBeInTheDocument();
});
