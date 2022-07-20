import React from 'react';
import { render, screen, fireEvent, act, within } from '@testing-library/react';
import SurveyPage from 'components/pages/SurveyPage';
import { createSurvey } from 'services/survey';
import i18nTest from 'utils/i18nTest';
import { I18nextProvider } from 'react-i18next';
<<<<<<< HEAD
import { INTERNET_ACCESS, RACE_OPTIONS } from 'constants/surveys';
=======
import { COMPUTER_USE, RACE_OPTIONS } from 'constants/surveys';
>>>>>>> 260a9e8113c36e6f73b45caebaf300b4365d3dd5

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
<<<<<<< HEAD
        const input = screen.getByLabelText(raceOption.label);
=======
        const input = raceCheckboxGroup.getByLabelText(raceOption.label);
>>>>>>> 260a9e8113c36e6f73b45caebaf300b4365d3dd5
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
<<<<<<< HEAD
      expect(createSurvey).toHaveBeenCalledWith(
        { isAuthenticated: true },
        {
          isHispanicOrLatino: null,
          raceOption: ['white', 'filipino'],
          internetAccess: [],
        },
      );
=======
      expect(createSurvey).toHaveBeenCalledWith({
        isHispanicOrLatino: 'decline',
        computerUse: [],
        household: '1',
        race: ['white', 'filipino', 'black'],
      });
>>>>>>> 260a9e8113c36e6f73b45caebaf300b4365d3dd5
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
      });
    });

    it('handles switching from decline to selecting an option', async () => {
      renderPage();

<<<<<<< HEAD
      expect(createSurvey).toHaveBeenCalledWith(
        { isAuthenticated: true },
        {
          isHispanicOrLatino: null,
          raceOption: ['decline'],
          internetAccess: [],
        },
      );
=======
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
>>>>>>> 260a9e8113c36e6f73b45caebaf300b4365d3dd5

      expect(createSurvey).toHaveBeenCalledWith({
        isHispanicOrLatino: 'decline',
        computerUse: [],
        household: '1',
        race: ['chinese'],
      });
    });
  });

  describe('Hispanic origin', () => {
    it('updates state correctly', async () => {
      renderPage();

<<<<<<< HEAD
      await fireEvent.click(screen.getByText('Decline to identify'));
      await fireEvent.click(screen.getByText('White'));

      const submitButton = screen.getByText('Submit');

      fireEvent.click(submitButton);

      expect(createSurvey).toHaveBeenCalledWith(
        { isAuthenticated: true },
        {
          isHispanicOrLatino: null,
          raceOption: ['white'],
          internetAccess: [],
        },
      );
    });
  });

  describe('Internet access checkbox group', () => {
    it('updates state correctly', async () => {
      renderPage();

      // asserting all expected options are present
      INTERNET_ACCESS.forEach((internetAccess) => {
        const input = screen.getByLabelText(internetAccess.label);
        expect(input).toBeInTheDocument();
      });

      // Testing selecting multiple options
      await fireEvent.click(screen.getByText('Broadband internet service'));
      await fireEvent.click(screen.getByText('Some other service'));

      // Testing submitting the form
      const submitButton = screen.getByText('Submit');
      fireEvent.click(submitButton);

      // Asserting that the bend service is called with the right values.
      expect(createSurvey).toHaveBeenCalledWith(
        { isAuthenticated: true },
        {
          isHispanicOrLatino: null,
          raceOption: [],
          internetAccess: ['broadband', 'other-service'],
        },
      );
=======
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
      });
>>>>>>> 260a9e8113c36e6f73b45caebaf300b4365d3dd5
    });
  });
});
