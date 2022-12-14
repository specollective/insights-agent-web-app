import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useAuth } from 'hooks/authentication'
import 'components/elements/SignUp.css'
import * as Yup from 'yup'
import { withFormik, Form, Field } from 'formik'
import 'yup-phone'

/**
 * Defines a function to map Formik props to form values
 * Function name matches Formik option key mapPropsToValues
 * @param {} props - includes email and password
 * @returns {object} - formatted field values
 */
export function mapPropsToValues({ phoneNumber, name }) {
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
  props.handleSubmit(values)
}

export const phoneNumberValidator = Yup.string()
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
})

/**
 * Represents the login page for the website
 * @param {Object} props
 * @returns {React.ReactElement}
 */
export function SignUpForm({ touched, errors }) {
  const { t } = useTranslation()

  return (
    <Form>
      <h1 className='text-center xl:text-xl'>
        {t("LandingPageHeading")}
      </h1>
      <div
        className='grid md:grid md:grid-cols-2 py-8 md:px-24 lg:px-32 xl:px-72 justify-center xl:text-xl'
        id=''
      >
        <div className='grid grid-rows-2 px-2'>
          <Field
            id='name'
            type='text'
            role='name'
            name='name'
            data-test-id='name'
            placeholder='Full Name'
            className='border border-black p-2 rounded'
          />
          <label htmlFor='name' className='text-sm'>
            {t('fullNameLabel')}
            <span className='error-message'>
              {touched.name && errors.name && <span>{errors.name}</span>}
            </span>
          </label>
        </div>

        <div className='grid grid-rows-2 px-2'>
          <Field
            id='phoneNumber'
            type='text'
            role='phoneNumber'
            name='phoneNumber'
            data-test-id='phone-number'
            placeholder='Phone Number'
            className='border border-black p-2 rounded'
          />
          <label htmlFor='phone-number' className='text-sm'>
            {t('phoneNumberLabel')} (XXX-XXX-XXXX)
            <span className='error-message'>
              {touched.phoneNumber && errors.phoneNumber && (
                <span>{errors.phoneNumber}</span>
              )}
            </span>
          </label>
        </div>
      </div>
      <button id='sign-up-button' type='submit' className='border rounded-lg'>
        Submit
      </button>
    </Form>
  )
}

/**
 * Wraps SendAccessCodeForm with the withFormik Higher-order component
 */
export const SignUpFormWithFormik = withFormik({
  mapPropsToValues,
  handleSubmit,
  validationSchema,
})(SignUpForm)

function SignUp({ retry }) {
  const auth = useAuth()
  const navigate = useNavigate()

  async function handleSubmit(formData) {
    try {
      
      const response = await auth.register(formData)

      if ( !retry && response.error ) {
        window.alert(response.error)
        return
      }

      navigate('/confirmation', { replace: true })
    } catch (e) {
      window.alert('Something went wrong')
    }
  }

  return (
    <div className='page py-16'>
      <SignUpFormWithFormik handleSubmit={handleSubmit} />
    </div>
  )
}

export default SignUp
