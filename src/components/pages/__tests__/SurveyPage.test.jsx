import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import SurveyPage from 'components/pages/SurveyPage'
import { createSurvey } from 'services/survey'
import i18nTest from 'utils/i18nTest'
import { I18nextProvider } from 'react-i18next'

jest.mock('hooks/authentication', () => ({
  useAuth: () => {
    return {
      user: {
        isAuthenticated: true
      },
      fetchCurrentUser: () => jest.mock()
    }
  },
}))

jest.mock('services/survey', () => ({
  createSurvey: jest.fn(),
}))

jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
}))

describe('Survey Page', () => {
  describe('Info section', () => {
    it('renders success message', () => {
      render(
        <I18nextProvider i18n={i18nTest}>
          <SurveyPage />
        </I18nextProvider>
      );
      expect(screen.getByText('Insights Agent General Info Survey'))
        .toBeInTheDocument()
    })
  })

  describe('age input', () => {
    it('fills', () => {
      render(
        <I18nextProvider i18n={i18nTest}>
          <SurveyPage />
        </I18nextProvider>
      );
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
        },
      )
    })
  })
})
