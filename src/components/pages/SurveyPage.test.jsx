import React from 'react';
import { render, screen } from '@testing-library/react';
import SurveyPage from './SurveyPage';

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

jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.mock(),
}));

it('renders success message', () => {
  render(<SurveyPage />);
  expect(screen.getByText('Insights Agent General Info Survey'))
    .toBeInTheDocument();
});
