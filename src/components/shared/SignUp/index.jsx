import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
  
  const navigate = useNavigate()
  
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
      navigate('/download')
    }
    setSubmitted(true)
  }
  
  return (
    <>
      <div>
        <div>
          <p>Sign up to participate in our study!</p>
        </div>
        <div id='register'>
          <form className='register-form' onSubmit={handleSubmit}>
            <div id='name'>
              <input
              id='first-name'
              className='form-field'
              type='text'
              placeholder='First Name'
              name='firstName'
              value={values.firstName}
              onChange={handleFirstNameInputChange}
              />
              {submitted && !values.firstName && <span id='first-name-error'>Please enter a first name</span>}
              <input
                id='last-name'
                className='form-field'
                type='text'
                placeholder='Last Name'
                name='lastName'
                value={values.lastName}
                onChange={handleLastNameInputChange}
                />
              {submitted && !values.lastName && <span id='last-name-error'>Please enter a last name</span>}
            </div>
            <div id='phone'>
              <input
                id='phone-number'
                className='form-field'
                type='text'
                placeholder='Phone Number as XXX-XXX-XXXX'
                name='phoneNumber'
                value={values.phoneNumber}
                onChange={handlePhoneNumberInputChange}
                />
              {submitted && !values.phoneNumber && <span id='phone-number-error'>Please enter a phone number</span>}
            </div>
            <div id='email'>
              <input
                id='email'
                className='form-field'
                type='text'
                placeholder='Email'
                name='email'
                value={values.email}
                onChange={handleEmailInputChange}
                />
              {submitted && !values.email && <span id='email-error'>Please enter an email.</span>}
            </div>
            <button className="form-field" type="submit" id='submit'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  )
}