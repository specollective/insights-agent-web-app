export const DEFAULT_FORM_VALUES = {
  isHispanicOrLatino: null,
  raceOption: [],
  internetAccess: [],
}

export const RACE_OPTIONS = [
  { value: 'white', label: 'White'},
  { value: 'black', label: 'Black or African American'},
  { value: 'american-indian', label: 'American Indian or Alaska Native'},
  { value: 'chinese ', label: 'Chinese'},
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
  { value: 'decline', label: 'Decline to identify'}

]

export const INTERNET_ACCESS = [
  {value: 'cellular-data', label:'Cellular data plan for smartphone'},
  {value: 'broadband', label:'Broadband internet service'},
  {value: 'satellite', label:'Satellite internet service'},
  {value: 'dial-up', label:'Dial up internet service'},
  {value: 'other-service', label:'Some other service'},
]