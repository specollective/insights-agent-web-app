export const DEFAULT_FORM_VALUES = {
  isHispanicOrLatino: null,
  race: [],
  household: '1',
}

// TODO: Apply i18n localization
export const RACE_OPTIONS = [
  { value: 'white', label: 'White'},
  { value: 'black', label: 'Black or African American'},
  { value: 'american-indian', label: 'American Indian or Alaska Native'},
  { value: 'chinese', label: 'Chinese'},
  { value: 'filipino', label: 'Filipino'},
  { value: 'asian-indian', label: 'Asian Indian'},
  { value: 'vietnamese', label: 'Vietnamese'},
  { value: 'korean', label: 'Korean'},
  { value: 'japanese', label: 'Japanese'},
  { value: 'hawaiian', label: 'Native Hawaiian'},
  { value: 'samoan', label: 'Samoan'},
  { value: 'chamorro', label: 'Charmorro'},
  { value: 'other-asian', label: 'Other Asian'},
  { value: 'other-pacific-islander', label: 'Other Pacific Islander'},
  { value: 'other', label: 'Other race not listed above'},
  { value: 'decline', label: 'Decline to identify'},
]

// TODO: Apply i18n localization
export const IS_HISPANIC_OPTIONS = [
  { value: 'true', label: 'Yes' },
  { value: 'false', label: 'No' },
  { value: 'decline', label: 'Decline to identify' }
]

export const HOUSEHOLD = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5+', label: '5+' },
]
