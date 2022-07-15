import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'hooks/authentication';
import { createSurvey } from 'services/survey';
import {
  DEFAULT_FORM_VALUES,
  MARITAL_STATUSES,
  EDUCATION_LEVELS,
  GENDER_IDENTITIES,
  IS_HISPANIC,
  RACE_OPTIONS,
} from 'constants/surveys';
import 'components/pages/SurveyPage.css';
import { withFormik, Form, Field } from 'formik';
import { useTranslation, Trans } from 'react-i18next';
import CheckboxGroup from 'components/elements/CheckboxGroup';
import RadioButtonGroup from 'components/elements/RadioButtonGroup';
import * as Yup from 'yup';

function SurveyForm({ touched, errors, values, setFieldValue, setValues }) {
  const { t } = useTranslation();

  const handleClearForm = () => {
    setValues(DEFAULT_FORM_VALUES);
  }

  // TODO: Render errors. Logging here to help with debugging.
  // console.log(errors);

  return (
    <Form className="survey">
      <div className="question">
        <div className="intro-description">
          <h4>Insights Agent General Info Survey</h4>
          <p>{t("surveyDescription")}</p>
          <p><strong>*Required field</strong></p>
        </div>
      </div>

      <div className="question">
        <h4>Please select your race.*</h4>
        <p>Check all that apply</p>

        <CheckboxGroup
          value={values.race}
          name="race"
          options={RACE_OPTIONS}
          onChange={setFieldValue}
        />
      </div>

      <div className="question">
        <h4>{t('surveyHispanicHeader')}</h4>
        <RadioButtonGroup
          value={values.isHispanicOrLatino}
          name="isHispanicOrLatino"
          options={IS_HISPANIC}
        />
      </div>

      <div className="question">
        <h4>What is your age?</h4>
        <Field
          value={values.age}
          name="age"
          type="text"
          data-testid="age-input"
          autoComplete="off"
        />
      </div>

      <div className="question">
        <h4>What gender do you identify with?</h4>

        <RadioButtonGroup
          value={values.gender}
          name="gender"
          options={GENDER_IDENTITIES}
        />

        <div>
          <label className="preference-input-label">Prefer to self describe</label>
          <Field
            name="gender"
            type="text"
            autoComplete="off"
          />
        </div>
      </div>

      <div className="question">
        <h4>What is your level of education?</h4>
        <RadioButtonGroup
          value={values.educationLevel}
          name="educationLevel"
          options={EDUCATION_LEVELS}
        />
      </div>

      <div className="question">
        <h4>What is your your marital status?</h4>
        <RadioButtonGroup
          value={values.maritalStatus}
          name="maritalStatus"
          options={MARITAL_STATUSES}
        />
      </div>

      <div className="actions">
        <button type="button" className="left" onClick={handleClearForm}>Clear Form</button>
        <button type="submit" className="right">Submit</button>
      </div>
    </Form>
  )
}

/**
 * Defines a function to map Formik props to form values
 * Function name matches Formik option key mapPropsToValues
 * @param {} props - includes email and password
 * @returns {object} - formatted field values
 */
export function mapPropsToValues ({ race, isHispanicOrLatino }) {
  return {
    race: race || [],
    isHispanicOrLatino: isHispanicOrLatino,
  }
}

/**
 * Defines the logic for handling form submission
 * Function name matches Formik option key handleSubmit
 * @param {} values - email and password
 * @returns {Response} - fetch response object
 */
export function handleSubmit(values, { props }) {
  props.handleSubmit(values);
}

/**
 * Defines a schema for form validations
 * Constant name matches Formik option key validationSchema
 * @constant
 * @type {object}
 */
export const validationSchema = Yup.object().shape({
  race: Yup.array().of(Yup.string()).min(1).required(),
  isHispanicOrLatino: Yup.string().required(),
  // technologyCompetencyLevel: Yup.number().min(1).max(5),
  // householdSize: Yup.string().required(),
  // computerUsage: Yup.string().required(),
  // numberOfDevices: Yup.string().required(),
  // internetAccessAvailability: Yup.string().required(),
});

/**
 * Wraps SendAccessCodeForm with the withFormik Higher-order component
 */
export const SurveyPageForm = withFormik({
  mapPropsToValues,
  handleSubmit,
  validationSchema,
})(SurveyForm);

function SurveyPage() {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async formData => {
    try {
      await createSurvey(formData);
      navigate('/success', { replace: true });
    } catch (e) {
      console.log(e);
    }
  }

  // TODO: Move into useAuth
  if (!auth.user) return <div>Loading</div>
  if (!auth.user.isAuthenticated) return <div>Unauthenticated</div>

  return (
    <div className="page">
      <SurveyPageForm handleSubmit={handleSubmit} />
    </div>
  )
}

export default SurveyPage
