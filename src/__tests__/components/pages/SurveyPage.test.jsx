import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SurveyPage from 'components/pages/SurveyPage';
import { createSurvey } from 'services/survey';
import i18nTest from 'utils/i18nTest';
import { I18nextProvider } from 'react-i18next';
import { RACE_OPTIONS } from 'constants/surveys';

jest.mock('hooks/authentication', () => ({
  useAuth: () => {
    return {
      user: {
        isAuthenticated: true
      },
      fetchCurrentUser: () => jest.mock()
    }
  },
}));

jest.mock('services/survey', () => ({
  createSurvey: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
}));

function renderPage () {
  render(
    <I18nextProvider i18n={i18nTest}>
      <SurveyPage />
    </I18nextProvider>
  )
}

describe('Survey Page', () => {
  describe('Info section', () => {
    it('renders success message', () => {
      renderPage();
      expect(screen.getByText('Insights Agent General Info Survey'))
        .toBeInTheDocument();
    });

    it('renders required field message', () => {
      renderPage();
      expect(screen.getByText('*Required field'))
        .toBeInTheDocument();
    });
  });

  describe('Race checkbox group', () => {
    it('updates state correctly', async () => {
      renderPage();

      // asserting all expected options are present
      RACE_OPTIONS.forEach((raceOption) => {
        const input = screen.getByLabelText(raceOption.label);
        expect(input).toBeInTheDocument();
      });

      // Testing selecting multiple options
      await fireEvent.click(screen.getByText('White'));
      await fireEvent.click(screen.getByText('Filipino'));

      // Testing submitting the form
      const submitButton = screen.getByText('Submit');
      fireEvent.click(submitButton);

      // Asserting that the bend service is called with the right values.
      expect(createSurvey).toHaveBeenCalledWith(
        { isAuthenticated: true },
        {
          isHispanicOrLatino: null,
          raceOption: ['white', 'filipino'],
        },
      );
    });

    it('handles decline all option', async () => {
      renderPage();

      await fireEvent.click(screen.getByText('White'));
      await fireEvent.click(screen.getByText('Filipino'));
      await fireEvent.click(screen.getByText('Decline to identify'));

      const submitButton = screen.getByText('Submit');

      fireEvent.click(submitButton);

      expect(createSurvey).toHaveBeenCalledWith(
        { isAuthenticated: true },
        {
          isHispanicOrLatino: null,
          raceOption: ['decline'],
        },
      );

    });

    it('handles switching from decline to selecting an option', async () => {
      renderPage();

      await fireEvent.click(screen.getByText('Decline to identify'));
      await fireEvent.click(screen.getByText('White'));

      const submitButton = screen.getByText('Submit');

      fireEvent.click(submitButton);

      expect(createSurvey).toHaveBeenCalledWith(
        { isAuthenticated: true },
        {
          isHispanicOrLatino: null,
          raceOption: ['white'],
        },
      );
    });
  });
});
