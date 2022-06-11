import React from 'react';
import { render, screen } from '@testing-library/react';
import SuccessPage from 'components/pages/SuccessPage';
import i18nTest from 'utils/i18nTest'
import { I18nextProvider } from 'react-i18next'

it('renders success message', () => {
  render(
    <I18nextProvider i18n={i18nTest}>
      <SuccessPage />
    </I18nextProvider>
  );
  expect(screen.getByText('Thank You!')).toBeInTheDocument();
});
