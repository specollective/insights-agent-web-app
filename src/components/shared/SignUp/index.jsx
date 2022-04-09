import React, { useState } from 'react'
import './signup.css'

export default function SignUp() {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
  })
  
  const [submitted, setSubmitted] = useState(false)
  const [valid, setValid] = useState(false)
  
  const handleFirstNameInputChange = (e) => {
    e.persist()
    setValues((values) => ({
      ...values,
      firstName: e.target.value,
    }))
  }
  const handleLastNameInputChange = (e) => {
    e.persist()
    setValues((values) => ({
      ...values,
      lastName: e.target.value,
    }))
  }
  const handlePhoneNumberInputChange = (e) => {
    e.persist()
    setValues((values) => ({
      ...values,
      phoneNumber: e.target.value,
    }))
  }  
  const handleEmailInputChange = (e) => {
    e.persist()
    setValues((values) => ({
      ...values,
      email: e.target.value,
    }))
  }  
  const handleSubmit = (e) => {
    e.preventDefault()
    if(values.firstName && values.lastName && values.phoneNumber && values.email) {
      setValid(true)
    }
    setSubmitted(true)
  }
  
  return (
    <>
      <div>
        <div>
          <h5>Sign up</h5>
        </div>
        <div>
          <form class='resgister-form' onSubmit={handleSubmit}>
            <input
              id='first-name'
              class='form-field'
              type='text'
              placeholder='First Name'
              name='firstName'
              value={values.firstName}
              onChange={handleFirstNameInputChange}
              />
            {submitted && !values.firstName && <span id='first-name-error'>Please enter a first name</span>}
            <input
              id='last-name'
              class='form-field'
              type='text'
              placeholder='Last Name'
              name='lastName'
              value={values.lastName}
              onChange={handleLastNameInputChange}
              />
            {submitted && !values.lastName && <span id='last-name-error'>Please enter a last name</span>}
            <input
              id='phone-number'
              class='form-field'
              type='text'
              placeholder='Phone Number'
              name='phoneNumber'
              value={values.phoneNumber}
              onChange={handlePhoneNumberInputChange}
              />
            {submitted && !values.phoneNumber && <span id='phone-number-error'>Please enter a phone number</span>}
            <input
              id='email'
              class='form-field'
              type='text'
              placeholder='Email'
              name='email'
              value={values.email}
              onChange={handleEmailInputChange}
              />
            {submitted && !values.email && <span id='email-error'>Please enter an email.</span>}
          <button class="form-field" type="submit">
            Submit
          </button>
          </form>
        </div>
      </div>
    </>
  )
}