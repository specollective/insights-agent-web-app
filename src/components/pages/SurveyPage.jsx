import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from 'hooks/authentication'
import { createSurvey } from 'services/survey'
import {
  DEFAULT_FORM_VALUES,
  MARITAL_STATUSES,
  EDUCATION_LEVELS,
  GENDER_IDENTITIES,
  IS_HISPANIC,
} from 'constants/surveys'
import RadioButtonGroup from 'components/elements/RadioButtonGroup'
import 'components/pages/SurveyPage.css'
import { Formik, Field, Form, useFormik } from 'formik';
import { useTranslation, Trans } from "react-i18next";

function SurveyPage() {
  const {t} = useTranslation();
  const auth = useAuth()
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      ...DEFAULT_FORM_VALUES
    },
    onSubmit: async () => {
      try {
        await createSurvey(auth.user, formik.values)
        navigate('/success', { replace: true })
      } catch (e) {
        console.log(e)
      }
    },
  });
  
  if (!auth.user) return <div>Loading</div>
  if (!auth.user.isAuthenticated) return <div>Unauthenticated</div>

  const handleClearForm = () => {
    formik.resetForm();
  }

  return (
    <form className="survey" onSubmit={formik.handleSubmit}>
      <div className="question">
        <h4>Insights Agent General Info Survey</h4>
        <p>Instructions</p>
      </div>

      <div className="question">
        <h4>What is your age?</h4>
        <input
          value={formik.values.age}
          name="age"
          type="text"
          onChange={formik.handleChange}
          data-testid="age-input"
          autoComplete="off"
        />
      </div>

      <div className="question">
        <h4>What gender do you identify with?</h4>

        <RadioButtonGroup
          value={formik.values.gender}
          name="gender"
          options={GENDER_IDENTITIES}
          onChange={formik.handleChange}
        />

        <div>
          <label className="preference-input-label">Prefer to self describe</label>
          <input
            name="gender"
            type="text"
            onChange={formik.handleChange}
            autoComplete="off"
          />
        </div>
      </div>

      <div className="question">
      <Trans i18nKey="survey-hispanic">
        <h4>{t("surveyHispanicHeader")}</h4>
          <RadioButtonGroup
            value={formik.values.isHispanicOrLatino}
            name="isHispanicOrLatino"
            options={IS_HISPANIC}
            onChange={formik.handleChange}
          />
        </Trans>
      </div>
      
      <div className="question">
        <h4>What is your level of education?</h4>
        <RadioButtonGroup
          value={formik.values.educationLevel}
          name="educationLevel"
          options={EDUCATION_LEVELS}
          onChange={formik.handleChange}
        />
      </div>

      <div className="question">
        <h4>What is your your marital status?</h4>
        <RadioButtonGroup
          value={formik.values.maritalStatus}
          name="maritalStatus"
          options={MARITAL_STATUSES}
          onChange={formik.handleChange}
        />
      </div>

      <div className="actions">
        <button className="left" onClick={handleClearForm}>Clear Form</button>
        <button className="right">Submit</button>
      </div>
    </form>
  )
}

export default SurveyPage
