import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/authentication'
import { useTranslation } from 'react-i18next'
import './SignUp.css'

export default function SignUp() {
  const auth = useAuth();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
  })

  const [errors, setErrors] = useState()

  const [valid, setValid] = useState(false)



  const handleFirstNameInputChange = (e) => {
    e.persist()
    setFormData((formData) => ({
      ...formData,
      name: e.target.value,
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

  const handleSubmit = async (e) => {
    e.preventDefault()

    const user = await auth.register(formData)
    if (user.valid) {
      navigate('/confirmation', { replace: true });
    } else {
      // setErrors(user.errors)
    }
  }

  return (
    <>
      <div>
        <div id="register">
          <form className="register-form" onSubmit={handleSubmit}>
            <div className="input-section">
              <label htmlFor="full-name">{ t('fullNameLabel') }</label>
              <input
                id="full-name"
                className="form-field"
                type="text"
                placeholder=""
                name="name"
                required
                value={formData.name}
                onChange={handleFirstNameInputChange}
              />
            </div>

            <div>
              <label htmlFor="phone-number">{ t('phoneNumberLabel') }</label>
              <input
                id="phone-number"
                className="form-field"
                type="text"
                placeholder=""
                required
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handlePhoneNumberInputChange}
              />
            </div>

            <button className="form-field" type="submit" id="sign-up-button">
              { t('submitText') }
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
