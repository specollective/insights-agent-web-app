import { API_URL } from 'constants/urls'
import { DEFAULT_FETCH_OPTIONS } from 'constants/fetch'

export async function createSurveyResult(surveyData) {
  const headers = {  ...DEFAULT_FETCH_OPTIONS.headers }

  // NOTE: We don't need this because we have httponly cookies
  // const accessToken = getAccessToken(userData)
  // if (accessToken) {
  //   headers['Authorization'] = `Bearer ${accessToken}`
  // }

  const response = await fetch(`${API_URL}/survey_results`, {
    ...DEFAULT_FETCH_OPTIONS,
    headers,
    credentials: 'include',
    method: 'POST',
    body: JSON.stringify({
      survey_id: surveyData.surveyId,
      hispanic_origin: surveyData.isHispanicOrLatino,
      computer_use: surveyData.computerUse.join(','),
      technology_compentency_level: surveyData.technologyCompetencyLevel,
      internet_access: surveyData.internetAccess.join(','),
      household_members: surveyData.householdMembers,
      household_computers: surveyData.householdComputers,
    }),
  });

  if (response.ok) {
    const json = await response.json()
    return json
  } else {
    throw Error('something went wrong')
  }
}
