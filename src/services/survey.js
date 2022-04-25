import { API_URL } from 'constants/urls'

const DEFAULT_OPTIONS = {
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json',
  },
}

export async function createSurvey(userData, surveyData) {
  const response = await fetch(`${API_URL}/surveys/`, {
    mode: 'cors',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      hispanic_origin: surveyData.isHispanicOrLatino,
      gender: surveyData.gender,
      age: surveyData.age,
      marital_status: surveyData.maritalStatus,
      education_level: surveyData.educationLevel,
      token: userData.survey_token,
    }),
  });

  if (response.ok) {
    const json = await response.json()
    return json
  } else {
    throw 'something went wrong'
  }
}

// export default surveyService;
