import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useAuth } from 'hooks/authentication'
import 'components/shared/SignUp.css'

function SignUp() {
  const { t } = useTranslation()
  const auth = useAuth()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
  })

  function handleFullNameInputChange(evt) {
    evt.persist()

    setFormData((formData) => ({
      ...formData,
      name: evt.target.value,
    }))
  }

  function handlePhoneNumberInputChange(evt) {
    evt.persist()

    setFormData((formData) => ({
      ...formData,
      phoneNumber: evt.target.value,
    }))
  }

  async function handleSubmit(evt) {
    evt.preventDefault()

    try {
      await auth.register(formData)
      navigate('/confirmation', { replace: true });
    } catch (e) {
      window.alert('Something went wrong')
    }
  }

  return (
    <div id="register">
      <h2>{ t('landingPageHeading') }</h2>

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
          <label htmlFor="phone-number">
            { t('phoneNumberLabel') }
          </label>
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

        <button id="sign-up-button" className="form-field" type="submit">
          { t('submitText') }
        </button>
      </form>
    </div>
  )
}

export default SignUp
