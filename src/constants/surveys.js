export const DEFAULT_FORM_VALUES = {
  isHispanicOrLatino: null,
  internetAccess: [],
  race: [],
  householdMembers: 'select one',
  computerUse: [],
  householdComputers: 'select one',
  computerDifficultyLevel: null,
  solveComputerProblemsLevel: null,
  handleComputerProblemsLevel: null,
  computerActingUpLevel: null,
  complexComputerLevel: null,
}

// TODO: Apply i18n localization
export const RACE_OPTIONS = (t) => [
  { value: 'white', label: t("RaceOptions.white")},
  { value: 'black', label: t("RaceOptions.black")},
  { value: 'american-indian', label: t("RaceOptions.american-indian")},
  { value: 'chinese', label: t("RaceOptions.chinese")},
  { value: 'filipino', label: t("RaceOptions.filipino")},
  { value: 'asian-indian', label: t("RaceOptions.asian-indian")},
  { value: 'vietnamese', label: t("RaceOptions.vietnamese")},
  { value: 'korean', label: t("RaceOptions.korean")},
]

export const RACE_OPTIONS_TWO = (t) => [
  { value: 'japanese', label: t("RaceOptions.japanese")},
  { value: 'hawaiian', label: t("RaceOptions.hawaiian")},
  { value: 'samoan', label: t("RaceOptions.samoan")},
  { value: 'chamorro', label: t("RaceOptions.chamorro")},
  { value: 'other-asian', label: t("RaceOptions.other-asian")},
  { value: 'other-pacific-islander', label: t("RaceOptions.other-pacific-islander")},
  { value: 'other', label: t("RaceOptions.other")},
  { value: 'decline', label: t("RaceOptions.decline")},
]

// TODO: Apply i18n localization
export const IS_HISPANIC_OPTIONS1 = (t) => [
  { value: 'false', label: t("HispanicOptions.false")},
  { value: 'chicano', label:  t("HispanicOptions.true1")},
  { value: 'puertorican', label:  t("HispanicOptions.true2")},
]

export const IS_HISPANIC_OPTIONS2 = (t) => [
  { value: 'cuban', label:  t("HispanicOptions.true3")},
  { value: 'other', label:  t("HispanicOptions.true4")},
  { value: 'decline', label: t("HispanicOptions.decline")},
]

export const INTERNET_ACCESS = (t) => [
  { value: 'cellular-data', label: t("InternetAccessOptions.cellular-data")},
  { value: 'broadband', label: t("InternetAccessOptions.broadband")},
  { value: 'satellite', label: t("InternetAccessOptions.satellite")},
  { value: 'dial-up', label: t("InternetAccessOptions.dial-up")},
  { value: 'other-service', label: t("InternetAccessOptions.other-service")},
]

export const HOUSEHOLD_MEMBERS = (t) => [
  { value: 'Select One', label: t("HouseholdSelectOne")},
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5+', label: '5+' },
]

export const COMPUTER_USE = (t) => [
  { value: 'entertainment', label: t("ComputerUseOptions.entertainment")},
  { value: 'gaming', label: t("ComputerUseOptions.gaming")},
  { value: 'school', label: t("ComputerUseOptions.school")},
  { value: 'creativity', label: t("ComputerUseOptions.creativity")},
  { value: 'business', label: t("ComputerUseOptions.business")},
  { value: 'family', label: t("ComputerUseOptions.family")},
  { value: 'gain-new-skills', label: t("ComputerUseOptions.gain-new-skills")},
  { value: 'job-search', label: t("ComputerUseOptions.job-search")},
]

export const TECHNOLOGY_COMPETENCY_LEVEL_OPTIONS = (t) => [
  { value: '1', label: '1', secondaryLabel: t("CompetencyOptions.1")},
  { value: '2', label: '2', secondaryLabel: t("CompetencyOptions.2")},
  { value: '3', label: '3', secondaryLabel: t("CompetencyOptions.3")},
  { value: '4', label: '4', secondaryLabel: t("CompetencyOptions.4")},
]

export const HOUSEHOLD_COMPUTERS = (t) => [
  { value: 'Select One', label: t("ComputerSelectOne")},
  { value: '0', label: '0' },
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5+', label: '5+' },
]



export default function generateTranslatedOptions (t) {
  return {
    DEFAULT_FORM_VALUES,
    RACE_OPTIONS: RACE_OPTIONS(t),
    RACE_OPTIONS_TWO: RACE_OPTIONS_TWO(t),
    HOUSEHOLD_MEMBERS: HOUSEHOLD_MEMBERS(t),
    INTERNET_ACCESS: INTERNET_ACCESS(t),
    IS_HISPANIC_OPTIONS1: IS_HISPANIC_OPTIONS1(t),
    IS_HISPANIC_OPTIONS2: IS_HISPANIC_OPTIONS2(t),
    COMPUTER_USE: COMPUTER_USE(t),
    TECHNOLOGY_COMPETENCY_LEVEL_OPTIONS: TECHNOLOGY_COMPETENCY_LEVEL_OPTIONS(t),
    HOUSEHOLD_COMPUTERS: HOUSEHOLD_COMPUTERS(t)
  }
}
