import { API_URL } from 'constants/urls'
import { DEFAULT_FETCH_OPTIONS } from 'constants/fetch'

export function coerceOptionToNumeric(value) {
  if (value === '' || value === undefined) {
    return null
  } else {
    return value.replace(/\D/g,'');
  }
}

export function  coerceOptionFromOther(mainQuestionData, otherInput ) {
  return mainQuestionData === 'other' ? otherInput : mainQuestionData;
}

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
      token: surveyData.token,
      survey_id: surveyData.surveyId,
      hispanic_origin: surveyData.isHispanicOrLatino,
      computer_use: surveyData.computerUse.join(','),
      // internet_access: surveyData.internetAccess,
      internet_access: coerceOptionFromOther(surveyData.internetAccess, surveyData.internetAccessOtherOptionText),
      household_members: coerceOptionToNumeric(surveyData.householdMembers),
      household_computers: coerceOptionToNumeric(surveyData.householdComputers),
      computer_difficulty_level: surveyData.computerDifficultyLevel,
      solve_computer_problems_level: surveyData.solveComputerProblemsLevel,
      handle_computer_problems_level: surveyData.handleComputerProblemsLevel,
      computer_acting_up_level: surveyData.computerActingUpLevel,
      complex_computer_level: surveyData.complexComputerLevel,
      race: surveyData.race.join(','),
    }),
  });

  if (response.ok) {
    const json = await response.json()
    return json
  } else {
    throw Error('something went wrong')
  }
}
