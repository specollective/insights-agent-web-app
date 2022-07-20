import React from 'react';
import { render, screen, fireEvent, act, within } from '@testing-library/react';
import SurveyPage from 'components/pages/SurveyPage';
import { createSurvey } from 'services/survey';
import i18nTest from 'utils/i18nTest';
import { I18nextProvider } from 'react-i18next';
import { INTERNET_ACCESS, RACE_OPTIONS, COMPUTER_USE } from 'constants/surveys';

// Mock out auth hooks
jest.mock('hooks/authentication', () => ({
  useAuth: () => {
    return {
      user: { isAuthenticated: true },
      fetchCurrentUser: () => jest.mock()
    }
  },
}));

// Mock out survey service
jest.mock('services/survey', () => ({
  createSurvey: jest.fn(),
}));

// Mock out react router
jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
}));

// Helper function to DRY up the test code.
function renderPage() {
  render(
    <I18nextProvider i18n={i18nTest}>
      <SurveyPage />
    </I18nextProvider>
  )
}

function findFormSection(screen, text) {
  return within(screen.getByText(text).closest('div'));
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

      const raceCheckboxGroup = findFormSection(screen, 'Please select your race.*');
      const hispanicRadioButtonGroup = findFormSection(screen, 'Are you of Hispanic origin?*');
      const householdSelectContainer = findFormSection(screen, 'Please answer about your HOUSEHOLD:');

      // asserting all expected options are present
      RACE_OPTIONS.forEach((raceOption) => {
        const input = raceCheckboxGroup.getByLabelText(raceOption.label);
        expect(input).toBeInTheDocument();
      });

      await act(() => {
        // Testing selecting multiple options
        fireEvent.click(raceCheckboxGroup.getByText('White'));
        fireEvent.click(raceCheckboxGroup.getByText('Filipino'));
        fireEvent.click(raceCheckboxGroup.getByText('Black or African American'));
        fireEvent.click(hispanicRadioButtonGroup.getByText('Decline to identify'));
        fireEvent.change(householdSelectContainer.getByTestId('dropdown-household'), {
          target: { value: '1' },
        });
        fireEvent.click(screen.getByText('Submit'));
      });

      // Asserting that the bend service is called with the right values.
      expect(createSurvey).toHaveBeenCalledWith({
        isHispanicOrLatino: 'decline',
        computerUse: [],
        household: '1',
        race: ['white', 'filipino', 'black'],
        internetAccess: [],
      });
    });

    it('handles decline all option', async () => {
      renderPage();

      const raceCheckboxGroup = findFormSection(screen, 'Please select your race.*');
      const hispanicRadioButtonGroup = findFormSection(screen, 'Are you of Hispanic origin?*');
      const householdSelectContainer = findFormSection(screen, 'Please answer about your HOUSEHOLD:');

      await act(() => {
        fireEvent.click(raceCheckboxGroup.getByText('White'));
        fireEvent.click(raceCheckboxGroup.getByText('Filipino'));
        fireEvent.click(raceCheckboxGroup.getByText('Decline to identify'));
        fireEvent.click(hispanicRadioButtonGroup.getByText('Decline to identify'));
        fireEvent.change(householdSelectContainer.getByTestId('dropdown-household'), {
          target: { value: '1' },
        });
        fireEvent.click(screen.getByText('Submit'));
      });

      expect(createSurvey).toHaveBeenCalledWith({
        isHispanicOrLatino: 'decline',
        computerUse: [],
        household: '1',
        race: ['decline'],
        internetAccess: [],
      });
    });

    it('handles switching from decline to selecting an option', async () => {
      renderPage();

      const raceCheckboxGroup = findFormSection(screen, 'Please select your race.*');
      const hispanicRadioButtonGroup = findFormSection(screen, 'Are you of Hispanic origin?*');
      const householdSelectContainer = findFormSection(screen, 'Please answer about your HOUSEHOLD:');

      await act(() => {
        fireEvent.click(raceCheckboxGroup.getByText('Decline to identify'));
        fireEvent.click(raceCheckboxGroup.getByText('Chinese'));
        fireEvent.click(hispanicRadioButtonGroup.getByText('Decline to identify'));
        fireEvent.change(householdSelectContainer.getByTestId('dropdown-household'), {
          target: { value: '1' },
        });
        fireEvent.click(screen.getByText('Submit'));
      });

      expect(createSurvey).toHaveBeenCalledWith({
        isHispanicOrLatino: 'decline',
        computerUse: [],
        household: '1',
        race: ['chinese'],
        internetAccess: [],
      });
    });
  });

  describe('Hispanic origin', () => {
    it('updates state correctly', async () => {
      renderPage();

      const raceCheckboxGroup = findFormSection(screen, 'Please select your race.*');
      const hispanicRadioButtonGroup = findFormSection(screen, 'Are you of Hispanic origin?*');
      const householdSelectContainer = findFormSection(screen, 'Please answer about your HOUSEHOLD:');

      await act(() => {
        // Testing selecting multiple options
        fireEvent.click(raceCheckboxGroup.getByText('Decline to identify'));
        fireEvent.click(hispanicRadioButtonGroup.getByText('Yes'));
        fireEvent.change(householdSelectContainer.getByTestId('dropdown-household'), {
          target: { value: '1' },
        });
        fireEvent.click(screen.getByText('Submit'));
      });

      // Asserting that the bend service is called with the right values.
      expect(createSurvey).toHaveBeenCalledWith({
        isHispanicOrLatino: 'true',
        computerUse: [],
        household: '1',
        race: ['decline'],
        internetAccess: [],
      });
    });
  });
});
