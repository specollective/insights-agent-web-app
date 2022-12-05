import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useAuth } from 'hooks/authentication'
import 'components/elements/SignUp.css'
import * as Yup from 'yup';
import { withFormik, Form, Field } from 'formik';
import 'yup-phone';

/**
 * Defines a function to map Formik props to form values
 * Function name matches Formik option key mapPropsToValues
 * @param {} props - includes email and password
 * @returns {object} - formatted field values
 */
export function mapPropsToValues ({ phoneNumber, name }) {
  return {
    phoneNumber: phoneNumber || '',
    name: name || '',
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

export const phoneNumberValidator = Yup
  .string()
  .required('Phone number is required')
  .phone('USA', true, 'Phone number is invalid')

/**
 * Defines a schema for form validations
 * Constant name matches Formik option key validationSchema
 * @constant
 * @type {object}
 */
export const validationSchema = Yup.object().shape({
  phoneNumber: phoneNumberValidator,
  name: Yup.string().required('Name is required'),
});

/**
 * Represents the login page for the website
 * @param {Object} props
 * @returns {React.ReactElement}
 */
export function SignUpForm({ touched, errors }) {
  const { t } = useTranslation()

  return (
    <div id="register">
      <Form>
        <div>
          <label htmlFor="name">
            { t('fullNameLabel') }

            <span className="error-message">
              { touched.name
                  && errors.name
                  && <span>{ errors.name }</span>
              }
            </span>
          </label>

          <div>
            <Field
              id="name"
              type="text"
              role="name"
              name="name"
              data-test-id="name"
              placeholder=""
            />
          </div>

          <label htmlFor="phone-number">
             { t('phoneNumberLabel') }

             <span className="error-message">
               { touched.phoneNumber
                   && errors.phoneNumber
                   && <span>{ errors.phoneNumber }</span>
               }
             </span>
          </label>

          <div>
            <Field
              id="phoneNumber"
              type="text"
              role="phoneNumber"
              name="phoneNumber"
              data-test-id="phone-number"
              placeholder="Phone number"
            />
          </div>

          <button id="sign-up-button" type="submit">Next</button>
        </div>
      </Form>
    </div>
  )
}

/**
 * Wraps SendAccessCodeForm with the withFormik Higher-order component
 */
export const SignUpFormWithFormik = withFormik({
  mapPropsToValues,
  handleSubmit,
  validationSchema,
})(SignUpForm);

function SignUp() {
  const auth = useAuth()
  const navigate = useNavigate()

  async function handleSubmit(formData) {
    try {
      
      await auth.register(formData)
      navigate('/confirmation', { replace: true });
    } catch (e) {
      window.alert('Something went wrong')
    }
  }

  return (
    <div className="page">
      <h1>Sign up to participate in our study!</h1>
      <SignUpFormWithFormik handleSubmit={handleSubmit} />
    </div>
  )
}

export default SignUp
