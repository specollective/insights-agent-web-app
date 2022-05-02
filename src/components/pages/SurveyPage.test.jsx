import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SurveyPage from './SurveyPage';
import { createSurvey } from 'services/survey';

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

describe('Survey Page', () => {
  describe('Info section', () => {
    it('renders success message', () => {
      render(<SurveyPage />);
      expect(screen.getByText('Insights Agent General Info Survey'))
        .toBeInTheDocument();
    });
  });

  describe('age input', () => {
    it('fills', () => {
      render(<SurveyPage />);
      const input = screen.getByTestId('age-input');
      expect(input).toBeInTheDocument();

      const submitButton = screen.getByText('Submit');

      fireEvent.change(input, {target: {value: '30'}});
      fireEvent.click(submitButton);

      expect(createSurvey).toHaveBeenCalledWith(
        { isAuthenticated: true },
        {
          age: '30',
          gender: '',
          zipCode: '',
          educationLevel: '',
          maritalStatus: '',
          isHispanicOrLatino: false
        },
      );
    });
  });
});
