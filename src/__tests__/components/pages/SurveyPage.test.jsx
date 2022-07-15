import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import SurveyPage from 'components/pages/SurveyPage';
import { createSurvey } from 'services/survey';
import i18nTest from 'utils/i18nTest';
import { I18nextProvider } from 'react-i18next';
import { RACE } from 'constants/surveys';

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
      RACE.forEach((raceOption) => {
        const input = screen.getByLabelText(raceOption.label);
        expect(input).toBeInTheDocument();
      });

      await act(() => {
        // Testing selecting multiple options
        fireEvent.click(screen.getByText('White'));
        fireEvent.click(screen.getByText('Filipino'));
        fireEvent.click(screen.getByText('Black or African American'));
        fireEvent.click(screen.getByText('Submit'));
      });

      // Asserting that the bend service is called with the right values.
      expect(createSurvey).toHaveBeenCalledWith({
        race: ['white', 'filipino', 'black'],
      });
    });

    it('handles decline all option', async () => {
      renderPage();

      await act(() => {
        fireEvent.click(screen.getByText('White'));
        fireEvent.click(screen.getByText('Filipino'));
        fireEvent.click(screen.getByText('Decline to identify'));
        fireEvent.click(screen.getByText('Submit'));
      });

      expect(createSurvey).toHaveBeenCalledWith({
        race: ['decline'],
      });
    });

    it('handles switching from decline to selecting an option', async () => {
      renderPage();

      await act(() => {
        fireEvent.click(screen.getByText('Decline to identify'));
        fireEvent.click(screen.getByText('Chinese'));
        fireEvent.click(screen.getByText('Submit'));
      });

      expect(createSurvey).toHaveBeenCalledWith({
        race: ['chinese'],
      });
    });
  });
});
