import { Trans } from 'react-i18next'

export const DEFAULT_FORM_VALUES = {
  isHispanicOrLatino: null,
  internetAccess: [],
  race: [],
  householdMembers: '1',
  computerUse: [],
  householdComputers: '0',
  computerDifficultyLevel: null,
  solveComputerProblemsLevel: null,
  handleComputerProblemsLevel: null,
  computerActingUpLevel: null,
  complexComputerLevel: null,
}

// TODO: Apply i18n localization
export const RACE_OPTIONS = [
  { value: 'white', label: <Trans i18nKey="RaceOptions.white" />},
  { value: 'black', label: <Trans i18nKey="RaceOptions.black" /> },
  { value: 'american-indian', label: <Trans i18nKey="RaceOptions.american-indian" /> },
  { value: 'chinese', label: <Trans i18nKey="RaceOptions.chinese" /> },
  { value: 'filipino', label: <Trans i18nKey="RaceOptions.filipino" /> },
  { value: 'asian-indian', label: <Trans i18nKey="RaceOptions.asian-indian" /> },
  { value: 'vietnamese', label: <Trans i18nKey="RaceOptions.vietnamese" /> },
  { value: 'korean', label: <Trans i18nKey="RaceOptions.korean" /> },
]

export const RACE_OPTIONS_TWO = [
  { value: 'japanese', label: <Trans i18nKey="RaceOptions.japanese" /> },
  { value: 'hawaiian', label: <Trans i18nKey="RaceOptions.hawaiian" /> },
  { value: 'samoan', label: <Trans i18nKey="RaceOptions.samoan" /> },
  { value: 'chamorro', label: <Trans i18nKey="RaceOptions.chamorro" /> },
  { value: 'other-asian', label: <Trans i18nKey="RaceOptions.other-asian" /> },
  { value: 'other-pacific-islander', label: <Trans i18nKey="RaceOptions.other-pacific-islander" /> },
  { value: 'other', label: <Trans i18nKey="RaceOptions.other" /> },
  { value: 'decline', label: <Trans i18nKey="RaceOptions.decline" /> },
]

// TODO: Apply i18n localization
export const IS_HISPANIC_OPTIONS = [
  { value: 'true', label: <Trans i18nKey="HispanicTrue" /> },
  { value: 'false', label: <Trans i18nKey="HispanicOptions.true" /> },
  { value: 'decline', label: 'Decline to identify' },
]

export const INTERNET_ACCESS = [
  { value: 'cellular-data', label: <Trans i18nKey="InternetAccessOptions.cellular-data" /> },
  { value: 'broadband', label: <Trans i18nKey="InternetAccessOptions.broadband" /> },
  { value: 'satellite', label: <Trans i18nKey="InternetAccessOptions.satellite" /> },
  { value: 'dial-up', label: <Trans i18nKey="InternetAccessOptions.dial-up" /> },
  { value: 'other-service', label: <Trans i18nKey="InternetAccessOptions.other-service" /> },
]

export const HOUSEHOLD_MEMBERS = [
  { value: 'Select One', label: 'Select One' },
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5+', label: '5+' },
]

export const COMPUTER_USE = [
  { value: 'entertainment', label: <Trans i18nKey="ComputerUseOptions.entertainment" /> },
  { value: 'gaming', label: <Trans i18nKey="ComputerUseOptions.gaming" /> },
  { value: 'school', label: <Trans i18nKey="ComputerUseOptions.school" /> },
  { value: 'creativity', label: <Trans i18nKey="ComputerUseOptions.creativity" /> },
  { value: 'business', label: <Trans i18nKey="ComputerUseOptions.business" /> },
  { value: 'family', label: <Trans i18nKey="ComputerUseOptions.family" /> },
  { value: 'gain-new-skills', label: <Trans i18nKey="ComputerUseOptions.gain-new-skills" /> },
  { value: 'job-search', label: <Trans i18nKey="ComputerUseOptions.job-search" /> },
]

export const TECHNOLOGY_COMPETENCY_LEVEL_OPTIONS = [
  { value: '1', label: '1', secondaryLabel: <Trans i18nKey="CompetencyOptions.1" /> },
  { value: '2', label: '2', secondaryLabel: <Trans i18nKey="CompetencyOptions.2" /> },
  { value: '3', label: '3', secondaryLabel: <Trans i18nKey="CompetencyOptions.3" /> },
  { value: '4', label: '4', secondaryLabel: <Trans i18nKey="CompetencyOptions.4" /> },
]

export const HOUSEHOLD_COMPUTERS = [
  { value: '0', label: '0' },
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5+', label: '5+' },
]
