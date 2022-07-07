import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from 'hooks/authentication'
import { createSurvey } from 'services/survey'
import {
  DEFAULT_FORM_VALUES,
  MARITAL_STATUSES,
  EDUCATION_LEVELS,
  GENDER_IDENTITIES,
  RACE,
} from 'constants/surveys'
import RadioButtonGroup from 'components/elements/RadioButtonGroup'
import 'components/pages/SurveyPage.css'
import CheckboxGroup from 'components/elements/CheckboxGroup'

import { useTranslation} from "react-i18next";

function SurveyPage() {
  const {t} = useTranslation();
  const auth = useAuth()
  const navigate = useNavigate()
  const [formData, setFormData] = useState(DEFAULT_FORM_VALUES)

  if (!auth.user) return <div>Loading</div>
  if (!auth.user.isAuthenticated) return <div>Unauthenticated</div>

  const handleSubmit = async () => {
    try {
      await createSurvey(auth.user, formData)
      navigate('/success', { replace: true })
    } catch (e) {
      console.log(e)
    }
  }

  const handleClearForm = () => {
    setFormData(DEFAULT_FORM_VALUES);
  }

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleRaceChange = (value, checked) => {
    if (checked) {
      setFormData({...formData, race: [...formData.race, value]})
    } else {
      const newRaces = formData.race.filter(raceValue => {
        return raceValue !== value
      })
      setFormData({...formData, race: newRaces})
    }

    
  }

  return (
    <main className="survey">
      <div className="question">
        <div className="intro-description">

            <h4>Insights Agent General Info Survey</h4>
            <p>{t("surveyDescription")}</p>
            <p><strong>*Required field</strong></p>
  
        </div>
      </div>

      <div className="question">
        <h4>Pleaase select your race.*</h4>
        <p>Check all that apply</p>

        <CheckboxGroup
          value={formData.race}
          name="race"
          options={RACE}
          onChange={handleRaceChange}
        />
      </div>

      <div className="question">
        <h4>What is your age?</h4>
        <input
          name="age"
          type="text"
          onChange={handleInputChange}
          data-testid="age-input"
          autoComplete="off"
          value={formData.age}
        />
      </div>

      <div className="question">
        <h4>What gender do you identify with?</h4>

        <RadioButtonGroup
          value={formData.gender}
          name="gender"
          options={GENDER_IDENTITIES}
          onChange={handleInputChange}
        />

        <div>
          <label className="preference-input-label">Prefer to self describe</label>
          <input
            name="gender"
            type="text"
            onChange={handleInputChange}
            autoComplete="off"
          />
        </div>
      </div>

      <div className="question">
        <h4>Are you of Hispanic, Latino, or Spanish origin?</h4>
        <div className="radio-button-group">
          <input
            checked={formData.isHispanicOrLatino === 'true'}
            id="latino-yes"
            name="isHispanicOrLatino"
            onChange={handleInputChange}
            type="radio"
            value="true"
          />
          <label htmlFor="latino-yes">Yes</label><br/>

          <input
            checked={formData.isHispanicOrLatino === 'false'}
            id="latino-no"
            name="isHispanicOrLatino"
            onChange={handleInputChange}
            type="radio"
            value="false"
          />
         <label htmlFor="latino-no">No</label>
        </div>
      </div>

      <div className="question">
        <h4>What is your level of education?</h4>
        <RadioButtonGroup
          value={formData.educationLevel}
          name="educationLevel"
          options={EDUCATION_LEVELS}
          onChange={handleInputChange}
        />
      </div>

      <div className="question">
        <h4>What is your your marital status?</h4>
        <RadioButtonGroup
          value={formData.maritalStatus}
          name="maritalStatus"
          options={MARITAL_STATUSES}
          onChange={handleInputChange}
        />
      </div>

      <div className="actions">
        <button className="left" onClick={handleClearForm}>Clear Form</button>
        <button className="right" onClick={handleSubmit}>Submit</button>
      </div>
    </main>
  )
}

export default SurveyPage
