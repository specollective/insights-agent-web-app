import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'hooks/authentication';
import { createSurvey } from 'services/survey';
import {
  DEFAULT_FORM_VALUES,
  RACE_OPTIONS,
  INTERNET_ACCESS,
  HOUSEHOLD,
  IS_HISPANIC_OPTIONS,
  COMPUTER_USE,
  TECHNOLOGY_COMPETENCY_LEVEL_OPTIONS,
} from 'constants/surveys'
import 'components/pages/SurveyPage.css'
import { useTranslation, Trans } from 'react-i18next';
import { withFormik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import CheckboxGroup from 'components/elements/CheckboxGroup';
import RadioButtonGroup from 'components/elements/RadioButtonGroup';
import DropdownGroup from 'components/elements/DropdownGroup';

export function SurveyForm({ touched, errors, values, setFieldValue, setValues }) {
  const { t } = useTranslation();

  const handleClearForm = () => {
    setValues(DEFAULT_FORM_VALUES);
  }

  // TODO: Render errors. Logging here to help with debugging.
  // console.log(errors);
  console.log(typeof touched)
  console.log(typeof [])
  return (
    <Form className="survey">
      
      <div className="intro-description header">
        <h4>Insights Agent General Info Survey</h4>
        <p>{t("surveyDescription")}</p>
        <p><strong>*Required field</strong></p>
      </div>

      {/* looking the formik object and see if values are in there labeled error. 
      When you hit submit, formik / yup library adds into that data object if there’s an error */}
      
      <div className={`question  ${ touched.race && errors.race ? "error"  : ""}`} >
        <h4>{ t('raceLabel') }*</h4>
        <p>Check all that apply.</p>
        
        <CheckboxGroup
          value={values.race}
          name="race"
          options={RACE_OPTIONS}
          onChange={setFieldValue}
        />
        
      </div>
      <span className="error-message error">
               { touched.race
                   && errors.race
                   && <span>{ errors.race }</span>
               }
        </span>

      <div className="question">
        <h4>{t('surveyHispanicHeader')}</h4>
        <RadioButtonGroup
          value={values.isHispanicOrLatino}
          name="isHispanicOrLatino"
          options={IS_HISPANIC_OPTIONS}
          onChange={setFieldValue}
        />
      </div>
      <span className="error-message error">
               { touched.isHispanicOrLatino
                   && errors.isHispanicOrLatino
                   && <span>{ errors.isHispanicOrLatino }</span>
               }
        </span>

      <div className="question">
        <h4>Please answer about your HOUSEHOLD:</h4>
        <h5>How many people live/stay in your household?</h5>

        <DropdownGroup
          value={values.household}
          name="household"
          options={HOUSEHOLD}
        />
      </div>

      <div className="question">
        <h4>What is the intended use of this computer?*</h4>
        <p>Check all that apply.</p>

        <CheckboxGroup
          value={values.computerUse}
          name="computerUse"
          options={COMPUTER_USE}
          onChange={setFieldValue}
        />
      </div>
      
      <div className="question">
        <h4>Rate your level of competence with computer technology*</h4>
        <RadioButtonGroup
          value={values.technologyCompetencyLevel}
          name="technologyCompetencyLevel"
          options={TECHNOLOGY_COMPETENCY_LEVEL_OPTIONS}
          isHorizontal={true}
        />
      </div>

      <div className="question">
        <h4>How does your houseland access the internet?*</h4>
        <p>Check all that apply.</p>

        <CheckboxGroup
          value={values.internetAccess}
          name="internetAccess"          
          options={INTERNET_ACCESS}
          onChange={setFieldValue}
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
export function mapPropsToValues ({ race, isHispanicOrLatino, computerUse, household, technologyCompetencyLevel, internetAccess }) {
  return {
    race: race || [],
    isHispanicOrLatino: isHispanicOrLatino,
    computerUse: computerUse || [],
    household: household,
    technologyCompetencyLevel: technologyCompetencyLevel,
    internetAccess: internetAccess || [],
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
  race: Yup.array().of(Yup.string()).min(1,'Error: Required Field'),
  isHispanicOrLatino: Yup.string().required('Error: Required Field'),
  household: Yup.string().required('Please select a household size'),
  // technologyCompetencyLevel: Yup.number().min(1).max(5),
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
