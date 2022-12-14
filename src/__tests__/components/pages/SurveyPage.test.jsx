import React from 'react';
import { render, screen, fireEvent, act, within } from '@testing-library/react';
import SurveyPage from 'components/pages/SurveyPage';
import { createSurveyResult } from 'services/survey_result';
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
jest.mock('services/survey_result', () => ({
  createSurveyResult: jest.fn(),
}));

// Mock out react router
jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
  useParams: () => jest.fn(),
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
      const competencyRadioButtonGroup = findFormSection(screen, 'Rate your level of competence with computer technology*')
      const householdMembersSelectContainer = findFormSection(screen, 'How many people live/stay in your household?*');
      const computerUsageCheckbox = findFormSection(screen, 'What is the intended use of this computer?*');
      const householdComputersSelectContainer = findFormSection(screen, 'How many other computers (including tablets) do you have in your household?*');
      const internetAccessCheckbox = findFormSection(screen, 'How does your household access the internet?*');
      
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
        fireEvent.click(competencyRadioButtonGroup.getByText('1'));
        fireEvent.change(householdMembersSelectContainer.getByTestId('dropdown-householdMembers'), {
          target: { value: '1' },
        });
        fireEvent.change(householdComputersSelectContainer.getByTestId('dropdown-householdComputers'), {
          target: { value: '5+' },
        });
        fireEvent.click(computerUsageCheckbox.getByText('Gaming'));
        fireEvent.click(internetAccessCheckbox.getByText('Dial up internet service'));
        fireEvent.click(screen.getByText('Submit'));
      });

      // Asserting that the bend service is called with the right values.
      expect(createSurveyResult).toHaveBeenCalledWith({
        isHispanicOrLatino: 'decline',
        computerUse: ['gaming'],
        householdMembers: '1',
        householdComputers:'5+',
        race: ['white', 'filipino', 'black'],
        internetAccess: ['dial-up'],
        technologyCompetencyLevel: '1',
      });
    });

    it('handles decline all option', async () => {
      renderPage();

      const raceCheckboxGroup = findFormSection(screen, 'Please select your race.*');
      const hispanicRadioButtonGroup = findFormSection(screen, 'Are you of Hispanic origin?*');
      const competencyRadioButtonGroup = findFormSection(screen, 'Rate your level of competence with computer technology*')
      const householdMembersSelectContainer = findFormSection(screen, 'How many people live/stay in your household?*');
      const computerUsageCheckbox = findFormSection(screen, 'What is the intended use of this computer?*');
      const householdComputersSelectContainer = findFormSection(screen, 'How many other computers (including tablets) do you have in your household?*');
      const internetAccessCheckbox = findFormSection(screen, 'How does your household access the internet?*');

      await act(() => {
        fireEvent.click(raceCheckboxGroup.getByText('White'));
        fireEvent.click(raceCheckboxGroup.getByText('Filipino'));
        fireEvent.click(raceCheckboxGroup.getByText('Decline to identify'));
        fireEvent.click(hispanicRadioButtonGroup.getByText('Decline to identify'));
        fireEvent.click(competencyRadioButtonGroup.getByText('1'));
        fireEvent.change(householdMembersSelectContainer.getByTestId('dropdown-householdMembers'), {
          target: { value: '1' },
        });
        fireEvent.change(householdComputersSelectContainer.getByTestId('dropdown-householdComputers'), {
          target: { value: '5+' },
        });
        fireEvent.click(computerUsageCheckbox.getByText('Gaming'));
        fireEvent.click(internetAccessCheckbox.getByText('Dial up internet service'));
        fireEvent.click(screen.getByText('Submit'));
      });

      expect(createSurveyResult).toHaveBeenCalledWith({
        isHispanicOrLatino: 'decline',
        computerUse: ['gaming'],
        householdMembers: '1',
        householdComputers:'5+',
        race: ['decline'],
        internetAccess: ['dial-up'],
        technologyCompetencyLevel: '1',
      });
    });

    it('handles switching from decline to selecting an option', async () => {
      renderPage();

      const raceCheckboxGroup = findFormSection(screen, 'Please select your race.*');
      const hispanicRadioButtonGroup = findFormSection(screen, 'Are you of Hispanic origin?*');
      const competencyRadioButtonGroup = findFormSection(screen, 'Rate your level of competence with computer technology*')
      const householdMembersSelectContainer = findFormSection(screen, 'How many people live/stay in your household?*');
      const computerUsageCheckbox = findFormSection(screen, 'What is the intended use of this computer?*');
      const householdComputersSelectContainer = findFormSection(screen, 'How many other computers (including tablets) do you have in your household?*');
      const internetAccessCheckbox = findFormSection(screen, 'How does your household access the internet?*');

      await act(() => {
        fireEvent.click(raceCheckboxGroup.getByText('Decline to identify'));
        fireEvent.click(raceCheckboxGroup.getByText('Chinese'));
        fireEvent.click(hispanicRadioButtonGroup.getByText('Decline to identify'));
        fireEvent.click(competencyRadioButtonGroup.getByText('1'));
        fireEvent.change(householdMembersSelectContainer.getByTestId('dropdown-householdMembers'), {
          target: { value: '1' },
        });
        fireEvent.change(householdComputersSelectContainer.getByTestId('dropdown-householdComputers'), {
          target: { value: '5+' },
        });
        fireEvent.click(computerUsageCheckbox.getByText('Gaming'));
        fireEvent.click(internetAccessCheckbox.getByText('Dial up internet service'));
        fireEvent.click(screen.getByText('Submit'));
      });

      expect(createSurveyResult).toHaveBeenCalledWith({
        isHispanicOrLatino: 'decline',
        computerUse: ['gaming'],
        householdMembers: '1',
        householdComputers:'5+',
        race: ['chinese'],
        internetAccess: ['dial-up'],
        technologyCompetencyLevel: '1',
      });
    });
  });

  describe('Hispanic origin', () => {
    it('updates state correctly', async () => {
      renderPage();

      const raceCheckboxGroup = findFormSection(screen, 'Please select your race.*');
      const hispanicRadioButtonGroup = findFormSection(screen, 'Are you of Hispanic origin?*');
      const competencyRadioButtonGroup = findFormSection(screen, 'Rate your level of competence with computer technology*')
      const householdMembersSelectContainer = findFormSection(screen, 'How many people live/stay in your household?*');
      const computerUsageCheckbox = findFormSection(screen, 'What is the intended use of this computer?*');
      const householdComputersSelectContainer = findFormSection(screen, 'How many other computers (including tablets) do you have in your household?*');
      const internetAccessCheckbox = findFormSection(screen, 'How does your household access the internet?*');


      await act(() => {
        // Testing selecting multiple options
        fireEvent.click(raceCheckboxGroup.getByText('Decline to identify'));
        fireEvent.click(hispanicRadioButtonGroup.getByText('Yes'));
        fireEvent.click(competencyRadioButtonGroup.getByText('1'));
        fireEvent.change(householdMembersSelectContainer.getByTestId('dropdown-householdMembers'), {
          target: { value: '1' },
        });
        fireEvent.change(householdComputersSelectContainer.getByTestId('dropdown-householdComputers'), {
          target: { value: '5+' },
        });
        fireEvent.click(computerUsageCheckbox.getByText('Gaming'));
        fireEvent.click(internetAccessCheckbox.getByText('Dial up internet service'));
        fireEvent.click(screen.getByText('Submit'));
      });

      // Asserting that the bend service is called with the right values.
      expect(createSurveyResult).toHaveBeenCalledWith({
        isHispanicOrLatino: 'true',
        computerUse: ['gaming'],
        householdMembers: '1',
        householdComputers:'5+',
        race: ['decline'],
        internetAccess: ['dial-up'],
        technologyCompetencyLevel: '1',
      });
    });
  });

  describe('Dropdown Group selections', () => {
    it('updates dropdown components state correctly', async () => {
      renderPage();

      const raceCheckboxGroup = findFormSection(screen, 'Please select your race.*');
      const hispanicRadioButtonGroup = findFormSection(screen, 'Are you of Hispanic origin?*');
      const competencyRadioButtonGroup = findFormSection(screen, 'Rate your level of competence with computer technology*')
      const householdMembersSelectContainer = findFormSection(screen, 'How many people live/stay in your household?*');
      const computerUsageCheckbox = findFormSection(screen, 'What is the intended use of this computer?*');
      const householdComputersSelectContainer = findFormSection(screen, 'How many other computers (including tablets) do you have in your household?*');
      const internetAccessCheckbox = findFormSection(screen, 'How does your household access the internet?*');

      await act(() => {
        // Testing selecting value
        fireEvent.click(raceCheckboxGroup.getByText('Decline to identify'));
        fireEvent.click(hispanicRadioButtonGroup.getByText('Yes'));
        fireEvent.click(competencyRadioButtonGroup.getByText('1'));
        fireEvent.change(householdMembersSelectContainer.getByTestId('dropdown-householdMembers'), {
          target: { value: '3' },
        });
        fireEvent.change(householdComputersSelectContainer.getByTestId('dropdown-householdComputers'), {
          target: { value: '5+' },
        });
        fireEvent.click(computerUsageCheckbox.getByText('Gaming'));
        fireEvent.click(internetAccessCheckbox.getByText('Dial up internet service'));
        fireEvent.click(screen.getByText('Submit'));
      });

      // Asserting that the bend service is called with the right values.
      expect(createSurveyResult).toHaveBeenCalledWith({
        isHispanicOrLatino: 'true',
        computerUse: ['gaming'],
        householdMembers: '3',
        householdComputers:'5+',
        race: ['decline'],
        internetAccess: ['dial-up'],
        technologyCompetencyLevel: '1',
      });
    });
  });
});
