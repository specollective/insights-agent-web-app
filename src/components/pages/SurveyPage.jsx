import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from 'hooks/authentication';
import { createSurveyResult } from "services/survey_result";
import {
  DEFAULT_FORM_VALUES,
  RACE_OPTIONS,
  RACE_OPTIONS_TWO,
  HOUSEHOLD_MEMBERS,
  INTERNET_ACCESS,
  IS_HISPANIC_OPTIONS,
  COMPUTER_USE,
  TECHNOLOGY_COMPETENCY_LEVEL_OPTIONS,
  HOUSEHOLD_COMPUTERS,
} from "constants/surveys";

import "components/pages/SurveyPage.css";
import { useTranslation } from "react-i18next";
import { withFormik, Form } from "formik";
import * as Yup from "yup";
import CheckboxGroup from "components/elements/CheckboxGroup";
import RadioButtonGroup from "components/elements/RadioButtonGroup";
import DropdownGroup from "components/elements/DropdownGroup";

function SurveyForm({ touched, errors, values, setFieldValue, setValues, resetForm }) {
  const { t } = useTranslation()

  const handleClearForm = (e) => {
    e.preventDefault()
    resetForm()
    setValues(DEFAULT_FORM_VALUES);
  }


  return (
    <Form className="flex flex-col lg:mx-40 md:mx-20 lg:place-items-center py-20 px-4">
      <div className=" bg-[#AECA9B] rounded">
        <div className="rounded p-6">
          <h4 className="font-semibold text-xl md:left lg:text-center">
            {t("InsightsAgentGeneralInfoSurvey")}
          </h4>
          <p>{t("SurveyDescription")}</p>

          <p>
            <strong>*{t("RequiredField")}</strong>
          </p>
        </div>
      </div>

      <section className="min-w-full space-y-4 px-0 py-10 md:px-0 lg:px-6">
        <h4 className="font-semibold heading">{t("SurveyAnswerAboutYourself")}:</h4>

        <div className={ `question p-6 ${touched.race && errors.race ? "border-2 border-[#FA0000]" : ""}` }>
          <h4 className="font-semibold">{t("SurveySelectYourRace")}*</h4>
          <p>{t("SurveyCheckAll")}</p>

          <div className="grid grid-cols-1 lg:grid lg:grid-cols-2">
            <div>
              <CheckboxGroup
                value={values.race}
                name="race"
                options={RACE_OPTIONS}
                onChange={setFieldValue}
              />
            </div>
            <div>
              <CheckboxGroup
                value={values.race}
                name="race"
                options={RACE_OPTIONS_TWO}
                onChange={setFieldValue}
              />
            </div>
          </div>
        </div>

        <div className={ `question p-6 ${touched.isHispanicOrLatino && errors.isHispanicOrLatino ? "border-2 border-[#FA0000]" : ""}` }>
          <h4 className="font-semibold">{t("SurveyHispanicHeader")}</h4>
          <RadioButtonGroup
            value={values.isHispanicOrLatino}
            name="isHispanicOrLatino"
            options={IS_HISPANIC_OPTIONS}
          />
          <label htmlFor="name" className="text-sm"></label>
        </div>
        <span className='error-message'>
            { touched.isHispanicOrLatino && errors.isHispanicOrLatino && <span> {t("SurveyErrorRequired")}</span>}
        </span>

        <div className={ `question p-4 ${touched.technologyCompetencyLevel && errors.technologyCompetencyLevel ? "border-2 border-[#FA0000]" : ""}` }>
          <h4 className="font-semibold">
            {t("SurveyCompetency")}*
          </h4>
          <ol className="list-outside">
            <li>1- Not at all confident</li>
            <li>2- Slightly confident</li>
            <li>3- Fairly confident</li>
            <li>4- Highly confident</li>
          </ol>
        </div>

        <div className={ `question p-6 ${touched.computerDifficultyLevel && errors.computerDifficultyLevel ? "border-2 border-[#FA0000]" : ""}` }>
          <h4 className="font-semibold">
            {t("SurveyICanUsuallyHandleDifficulties")}*
          </h4>
          <RadioButtonGroup
            value={values.technologyCompetencyLevel}
            name="technologyCompetencyLevel"
            options={TECHNOLOGY_COMPETENCY_LEVEL_OPTIONS}
            isHorizontal={true}
          />
        </div>
        <span className='error-message'>
            { touched.computerDifficultyLevel && errors.computerDifficultyLevel && <span> Error: Required Field </span>}
        </span>

        <div className={ `question p-6 ${touched.solveComputerProblemsLevel && errors.solveComputerProblemsLevel ? "border-2 border-[#FA0000]" : ""}` }>
          <h4 className="font-semibold">
            {t("SurveyICanSolveProblems")}*
          </h4>
          <RadioButtonGroup
            value={values.technologyCompetencyLevel}
            name="technologyCompetencyLevel"
            options={TECHNOLOGY_COMPETENCY_LEVEL_OPTIONS}
            isHorizontal={true}
          />
        </div>
        <span className='error-message'>
            { touched.solveComputerProblemsLevel && errors.solveComputerProblemsLevel && <span> Error: Required Field </span>}
        </span>

        <div className={ `question p-6 ${touched.handleComputerProblemsLevel && errors.handleComputerProblemsLevel ? "border-2 border-[#FA0000]" : ""}` }>
          <h4 className="font-semibold">
            {t("SurveyICanUsuallyHandleProblems")}*
          </h4>
          <RadioButtonGroup
            value={values.technologyCompetencyLevel}
            name="technologyCompetencyLevel"
            options={TECHNOLOGY_COMPETENCY_LEVEL_OPTIONS}
            isHorizontal={true}
          />
        </div>

        <div className={ `question p-6 ${touched.computerActingUpLevel && errors.computerActingUpLevel ? "border-2 border-[#FA0000]" : ""}` }>
          <h4 className="font-semibold">
            {t("SurveyComputerActingUp")}*
          </h4>
          <RadioButtonGroup
            value={values.technologyCompetencyLevel}
            name="technologyCompetencyLevel"
            options={TECHNOLOGY_COMPETENCY_LEVEL_OPTIONS}
            isHorizontal={true}
          />
        </div>
        <span className='error-message'>
            { touched.computerActingUpLevel && errors.computerActingUpLevel && <span> Error: Required Field </span>}
        </span>
        
        <div className={ `question p-6 ${touched.complexComputerLevel && errors.complexComputerLevel ? "border-2 border-[#FA0000]" : ""}` }>
          <h4 className="font-semibold">
            {t("SurveyICanComplete")}*
          </h4>
          <RadioButtonGroup
            value={values.technologyCompetencyLevel}
            name="technologyCompetencyLevel"
            options={TECHNOLOGY_COMPETENCY_LEVEL_OPTIONS}
            isHorizontal={true}
          />
        </div>
        <span className='error-message'>
            { touched.technologyCompetencyLevel && errors.technologyCompetencyLevel && <span>{t("SurveyErrorRequired")}</span>}
        </span>

        <div>
          <h4 className="font-semibold ">
            {t("SurveyAnswerAboutHousehold")}:
          </h4>
        </div>
        <div className={ `question p-6 ${touched.householdMembers && errors.householdMembers ? "border-2 border-[#FA0000]" : ""}` }>
          <h5 className="font-semibold">
            {t("SurveyHowManyLiveInHousehold")}*
          </h5>
       
          <DropdownGroup
              value={values.householdMembers}
              name="householdMembers"
              options={HOUSEHOLD_MEMBERS}
            />
          
        </div>
        <span className="error-message">
          {touched.householdMembers && errors.householdMembers && (
            <span>{errors.householdMembers}</span>
          )}
        </span>

        <div className={ `question p-6 ${touched.computerUse && errors.computerUse ? "border-2 border-[#FA0000]" : ""}` }>
          <h4 className="font-semibold">
            {t("SurveyIntendedUse")}*
          </h4>
          <p>{t("SurveyCheckAll")}</p>

          <CheckboxGroup
            value={values.computerUse}
            name="computerUse"
            options={COMPUTER_USE}
            onChange={setFieldValue}
          />
        </div>

        <span className="error-message">
          {touched.computerUse && errors.computerUse && (
            <span> {errors.computerUse} </span>
          )}
        </span>

        <div className={ `question p-6 ${touched.householdComputers && errors.householdComputers ? "border-2 border-[#FA0000]" : ""}` }>
          <h4 className="font-semibold">
            {t("SurveyHowManyOtherComputers")}
          </h4>

          <DropdownGroup
            value={values.householdComputers}
            name="householdComputers"
            options={HOUSEHOLD_COMPUTERS}
          />
        </div>
        <span className="error-message">
          {touched.householdComputers && errors.householdComputers && (
            <span>{errors.householdComputers}</span>
          )}
        </span>

        <div className={ `question p-6 ${touched.internetAccess && errors.internetAccess ? "border-2 border-[#FA0000]" : ""}` }>
          <h4 className="font-semibold">
            {t("SurveyHowDoesHouseholdAccess")}*
          </h4>
          <p>{t("SurveyCheckAll")}</p>


          <CheckboxGroup
            value={values.internetAccess}
            name="internetAccess"
            options={INTERNET_ACCESS}
            onChange={setFieldValue}
          />
        </div>
        <span className="error-message">
          {touched.internetAccess && errors.internetAccess && (
            <span> {errors.internetAccess} </span>
          )}
        </span>

        <div className="actions">
          <button
            type="button"
            className="left cursor-pointer"
            onClick={handleClearForm}
          >
            {t("SurveyClearForm")}
          </button>
          <button
            type="submit"
            className="right text-white bg-green-100 rounded-sm px-6 py-2"
          >
            {t("submitText")}
          </button>
        </div>
      </section>
    </Form>
  );
}

/**
 * Defines a function to map Formik props to form values
 * Function name matches Formik option key mapPropsToValues
 * @param {} props - includes email and password
 * @returns {object} - formatted field values
 */
export function mapPropsToValues({
  race,
  isHispanicOrLatino,
  computerUse,
  householdMembers,
  internetAccess,
  householdComputers,
  computerDifficultyLevel, 
  solveComputerProblemsLevel,
  handleComputerProblemsLevel,
  computerActingUpLevel,
  complexComputerLevel,
}) {
  return {
    race: race || [],
    isHispanicOrLatino: isHispanicOrLatino,
    computerUse: computerUse || [],
    internetAccess: internetAccess || [],
    householdMembers: householdMembers,
    householdComputers: householdComputers,
    computerDifficultyLevel: computerDifficultyLevel, 
    solveComputerProblemsLevel: solveComputerProblemsLevel,
    handleComputerProblemsLevel: handleComputerProblemsLevel,
    computerActingUpLevel: computerActingUpLevel,
    complexComputerLevel: complexComputerLevel,
  };
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
  race: Yup.array().min(1, "Error: Required Field"),
  isHispanicOrLatino: Yup.string().required(),
  householdMembers: Yup.string().required("Error: Required Field"),
  computerDifficultyLevel: Yup.number().min(1).required(),
  solveComputerProblemsLevel: Yup.number().min(1).required(),
  handleComputerProblemsLevel: Yup.number().min(1).required(),
  computerActingUpLevel: Yup.number().min(1).required(),
  complexComputerLevel: Yup.number().min(1).required(),
  computerUse: Yup.array().min(1, "Error: Required Field"),
  householdComputers: Yup.string().required("Error: Required Field"),
  internetAccess: Yup.array().min(1, "Error: Required Field"),
})

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
  const navigate = useNavigate()
  const { surveyId } = useParams()

  const handleSubmit = async (formData) => {
    const { survey_token } = auth.user
    try {
      await createSurveyResult({ 
        token: survey_token, 
        surveyId, 
        ...formData
      })
      navigate('/success', { replace: true })
    } catch (e) {
      console.log(e);
    }
  };

  // TODO: Move into useAuth
  if (!auth.user) return <div>Loading</div>
  if (!auth.user.isAuthenticated) return <div>Unauthenticated</div>

  return (
    <div className="page">
      <SurveyPageForm handleSubmit={handleSubmit} />
    </div>
  );
}

export default SurveyPage;
