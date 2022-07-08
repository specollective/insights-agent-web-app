import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SurveyPage from 'components/pages/SurveyPage';
import { createSurvey } from 'services/survey';
import i18nTest from 'utils/i18nTest';
import { I18nextProvider } from 'react-i18next';

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

  describe('Age input', () => {
    it('fills', () => {
      renderPage();
      const input = screen.getByTestId('age-input')
      expect(input).toBeInTheDocument()

      const submitButton = screen.getByText('Submit')

      fireEvent.change(input, {target: {value: '30'}})
      fireEvent.click(submitButton)

      expect(createSurvey).toHaveBeenCalledWith(
        { isAuthenticated: true },
        {
          age: '30',
          gender: '',
          zipCode: '',
          educationLevel: '',
          maritalStatus: '',
          isHispanicOrLatino: null,
          race: [],
        },
      );
    });
  });

  describe('Race checkbox group', () => {
    it('updates state correctly', async () => {
      renderPage();

      const input = screen.getByLabelText('White');

      expect(input).toBeInTheDocument();

      await fireEvent.click(screen.getByText('White'));

      const submitButton = screen.getByText('Submit');

      fireEvent.click(submitButton);

      expect(createSurvey).toHaveBeenCalledWith(
        { isAuthenticated: true },
        {
          age: '',
          gender: '',
          zipCode: '',
          educationLevel: '',
          maritalStatus: '',
          isHispanicOrLatino: null,
          race: ['white'],
        },
      );
    });
  });
});
