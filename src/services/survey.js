import { API_URL } from 'constants/urls'

export async function createSurvey(userData, surveyData) {
  const response = await fetch(`${API_URL}/surveys`, {
    mode: 'cors',
    credentials: 'include',
    cache: 'no-cache',
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
    }),
  });

  if (response.ok) {
    const json = await response.json()
    return json
  } else {
    throw Error('something went wrong')
  }
}
