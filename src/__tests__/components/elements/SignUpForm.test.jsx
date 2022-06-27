import React from 'react';
import { render, screen } from '@testing-library/react';
import SignUpForm from 'components/elements/SignUp';
import i18nTest from 'utils/i18nTest';
import { I18nextProvider } from 'react-i18next';

// TODO: Move into parent component
const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('SignUpForm', () => {
  it('renders prompt', () => {
    render(
      <I18nextProvider i18n={i18nTest}>
        <SignUpForm />
      </I18nextProvider>
    );

    expect(screen.getByText('Sign up to participate in our study!'))
      .toBeInTheDocument();
  });
});
