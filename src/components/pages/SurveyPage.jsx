import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import { useAuth } from 'hooks/authentication';
import { createSurvey } from "services/survey";
import {
  DEFAULT_FORM_VALUES,
  RACE_OPTIONS,
  HOUSEHOLD_MEMBERS,
  INTERNET_ACCESS,
  IS_HISPANIC_OPTIONS,
  COMPUTER_USE,
  TECHNOLOGY_COMPETENCY_LEVEL_OPTIONS,
  HOUSEHOLD_COMPUTERS,
} from "constants/surveys";
import "components/pages/SurveyPage.css";
import { useTranslation, Trans } from "react-i18next";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import CheckboxGroup from "components/elements/CheckboxGroup";
import RadioButtonGroup from "components/elements/RadioButtonGroup";
import DropdownGroup from "components/elements/DropdownGroup";

function SurveyForm({ touched, errors, values, setFieldValue, setValues }) {
  const { t } = useTranslation();

  const handleClearForm = () => {
    setValues(DEFAULT_FORM_VALUES);
  };

  // TODO: Render errors. Logging here to help with debugging.
  // console.log(errors);

  return (
    <Form className="flex flex-col md:mx-20 lg:place-items-center py-20 px-4">
      <div className=" bg-[#AECA9B] rounded">
        <div className="rounded p-6">
          <h4 className="font-semibold text-xl md:left lg:text-center">
            Insights Agent General Info Survey
          </h4>
          <p className="">{t("surveyDescription")}</p>
          <p>
            <strong>*Required field</strong>
          </p>
        </div>
      </div>
      <section className="min-w-full space-y-4 px-6 py-10 md:px-0">
        <h4 className="font-semibold ">Please answer about YOURSELF:</h4>

        <div className="rounded shadow-lg p-6 ">
          <h4 className="font-semibold">Please select your race.*</h4>
          <p>Check all that apply.</p>

          <CheckboxGroup
            value={values.race}
            name="race"
            options={RACE_OPTIONS}
            onChange={setFieldValue}
          />
        </div>

        <div className="rounded shadow-lg p-6">
          <h4 className="font-semibold">{t("surveyHispanicHeader")}</h4>
          <RadioButtonGroup
            value={values.isHispanicOrLatino}
            name="isHispanicOrLatino"
            options={IS_HISPANIC_OPTIONS}
          />
        </div>

        <div className="flex flex-col rounded shadow-lg p-6">
          <h4>Rate your level of competence with computer technology*</h4>
          <RadioButtonGroup
            value={values.technologyCompetencyLevel}
            name="technologyCompetencyLevel"
            options={TECHNOLOGY_COMPETENCY_LEVEL_OPTIONS}
            isHorizontal={true}
          />
        </div>

        <div>
          <h4 className="font-semibold ">
            Please answer about your HOUSEHOLD:
          </h4>
        </div>
        <div className="flex flex-col rounded shadow-lg p-6 ">
          <h5 className="font-semibold">
            How many people live/stay in your household?
          </h5>

          <DropdownGroup
            value={values.householdMembers}
            name="householdMembers"
            options={HOUSEHOLD_MEMBERS}
          />
        </div>

        <div className="flex flex-col rounded shadow-lg p-6 ">
          <h4 className="font-semibold">
            What is the intended use of this computer?*
          </h4>
          <p>Check all that apply.</p>

          <CheckboxGroup
            value={values.computerUse}
            name="computerUse"
            options={COMPUTER_USE}
            onChange={setFieldValue}
          />
        </div>

        <div className="flex flex-col rounded shadow-lg p-6  ">
          <h4 className="font-semibold">
            How many other computers (including tablets) do you have in your
            household?*
          </h4>

          <DropdownGroup
            value={values.householdComputers}
            name="householdComputers"
            options={HOUSEHOLD_COMPUTERS}
          />
        </div>

        <div className="flex flex-col rounded shadow-lg p-6  ">
          <h4 className="font-semibold">
            How does your household access the internet?*
          </h4>
          <p>Check all that apply.</p>

          <CheckboxGroup
    
            value={values.internetAccess}
            name="internetAccess"
            options={INTERNET_ACCESS}
            onChange={setFieldValue}
          />
        </div>

        {/*<div className="question">
        <h4>What is the intended use of this computer?*</h4>
        <p>Check all that apply.</p>

        <CheckboxGroup
          value={values.computerUse}
          name="computerUse"
          options={COMPUTER_USE}
          onChange={setFieldValue}
        />
      </div>*/}

        <div className="">
          <button
            type="button"
            className="left cursor-pointer"
            onClick={handleClearForm}
          >
            Clear Form
          </button>
          <button
            type="submit"
            className="right text-white bg-green-100 rounded-sm px-6 py-2"
          >
            Submit
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
  technologyCompetencyLevel,
  internetAccess,
  householdComputers,
}) {
  return {
    race: race || [],
    isHispanicOrLatino: isHispanicOrLatino,
    computerUse: computerUse || [],
    technologyCompetencyLevel: technologyCompetencyLevel,
    internetAccess: internetAccess || [],
    householdMembers: householdMembers,
    householdComputers: householdComputers,
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
  race: Yup.array().of(Yup.string()).min(1).required(),
  isHispanicOrLatino: Yup.string().required(),
  householdMembers: Yup.string().required("Please select a household size"),
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
  //const auth = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    try {
      await createSurvey(formData);
      navigate("/success", { replace: true });
    } catch (e) {
      console.log(e);
    }
  };

  // TODO: Move into useAuth
  //if (!auth.user) return <div>Loading</div>
  //if (!auth.user.isAuthenticated) return <div>Unauthenticated</div>

  return (
    <div className="page">
      <SurveyPageForm handleSubmit={handleSubmit} />
    </div>
  );
}

export default SurveyPage;
