import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/authentication'
import './SignUp.css'

export default function SignUp() {
  const auth = useAuth();

  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [valid, setValid] = useState(false)

  const navigate = useNavigate()

  const handleFirstNameInputChange = (e) => {
    e.persist()
    setFormData((formData) => ({
      ...formData,
      name: e.target.value,
    }))
  }

  const handleLastNameInputChange = (e) => {
    e.persist()
    setFormData((formData) => ({
      ...formData,
      lastName: e.target.value,
    }))
  }

  const handlePhoneNumberInputChange = (e) => {
    e.persist()
    setFormData((formData) => ({
      ...formData,
      phoneNumber: e.target.value,
    }))
  }

  const handleEmailInputChange = (e) => {
    e.persist()
    setFormData((formData) => ({
      ...formData,
      email: e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    auth.signin(formData, () => {
      // Send them back to the page they tried to visit when they were
      // redirected to the login page. Use { replace: true } so we don't create
      // another entry in the history stack for the login page.  This means that
      // when they get to the protected page and click the back button, they
      // won't end up back on the login page, which is also really nice for the
      // user experience.
      // navigate(from, { replace: true });
      navigate('/survey', { replace: true });
    });
  }

  return (
    <>
      <div>
        <div id="register">
          <form className="register-form" onSubmit={handleSubmit}>

            <div>
              <input
                id="first-name"
                className="form-field"
                type="text"
                placeholder="First Name"
                name="name"
                value={formData.name}
                onChange={handleFirstNameInputChange}
              />

              {submitted && !formData.name && <span id="first-name-error">Please enter a first name</span>}
            </div>

            <div>
              <input
                id="phone-number"
                className="form-field"
                type="text"
                placeholder="Phone Number as XXX-XXX-XXXX"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handlePhoneNumberInputChange}
                />

              {submitted && !formData.phoneNumber && <span id="phone-number-error">Please enter a phone number</span>}
            </div>

            {/* TODO: Discuss if we want an optional email
              <div id="email">
                <input
                  id="email"
                  className="form-field"
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleEmailInputChange}
                  />
                {submitted && !formData.email && <span id="email-error">Please enter an email.</span>}
              </div>
            */}

            <button className="form-field" type="submit" id="sign-up-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
