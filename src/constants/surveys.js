export const DEFAULT_FORM_VALUES = {
  age: '',
  gender: '',
  zipCode: '',
  educationLevel: '',
  maritalStatus: '',
  isHispanicOrLatino: null,
  race: '',
}

export const MARITAL_STATUSES = [
  { value: 'single-never-married', label: 'Single never married' },
  { value: 'married-or-domestic-partnership', label: 'Married or domestic partnership' },
  { value: 'divorced', label: 'Divorced' },
  { value: 'separated', label: 'Separated' },
]

export const EDUCATION_LEVELS = [
  { value: 'highschool', label: 'Highschool' },
  { value: 'vocational', label: 'Vocational' },
  { value: 'associates', label: 'Associates' },
  { value: 'bachelors-degree', label: 'Bachelors' },
  { value: 'graduate-degree', label: 'Graduate' },
  { value: 'doctorate-degree', label: 'Doctorate' },
]

export const GENDER_IDENTITIES = [
  { value: 'man', label: 'Man' },
  { value: 'woman', label: 'Woman' },
  { value: 'non-binary', label: 'Non-binary/non-conforming' },
  { value: 'transgender', label: 'Transgender' },
]

