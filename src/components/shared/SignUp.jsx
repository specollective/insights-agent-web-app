import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/authentication'
import { useTranslation } from 'react-i18next'
import './SignUp.css'

export default function SignUp() {
  const auth = useAuth()
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
  })

  // const [errors, setErrors] = useState()
  // const [valid, setValid] = useState(false)

  const handleFullNameInputChange = evt => {
    evt.persist()
    setFormData((formData) => ({
      ...formData,
      name: evt.target.value,
    }))
  }

  const handlePhoneNumberInputChange = evt => {
    evt.persist()
    setFormData((formData) => ({
      ...formData,
      phoneNumber: evt.target.value,
    }))
  }

  const handleSubmit = async evt => {
    evt.preventDefault()

    const user = await auth.register(formData);
    if (user.valid) {
      navigate('/confirmation', { replace: true });
    } else {
      // TODO: Add helpful validation errors.
      // setErrors(user.errors)
    }
  }

  return (
    <div id="register">
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="input-section">
          <label htmlFor="full-name">
            { t('fullNameLabel') }
          </label>
          <input
            autoComplete="off"
            className="form-field"
            id="full-name"
            name="name"
            onChange={handleFullNameInputChange}
            placeholder=""
            required
            type="text"
            value={formData.name}
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
            autoComplete="off"
            value={formData.phoneNumber}
            onChange={handlePhoneNumberInputChange}
          />
        </div>

        <button className="form-field" type="submit" id="sign-up-button">
          { t('submitText') }
        </button>
      </form>
    </div>
  )
}
