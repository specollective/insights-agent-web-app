import { API_URL } from 'constants/urls'
import { DEFAULT_FETCH_OPTIONS } from 'constants/fetch'

export async function createSurvey(userData, surveyData) {
  const headers = {  ...DEFAULT_FETCH_OPTIONS.headers }

  // NOTE: We don't need this because we have httponly cookies
  const accessToken = getAccessToken(userData)
  if (accessToken) {
    headers['Authorization'] = `Bearer ${accessToken}`
  }

  const response = await fetch(`${API_URL}/surveys`, {
    ...DEFAULT_FETCH_OPTIONS,
    headers,
    credentials: 'include',
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
