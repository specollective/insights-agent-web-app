import { useEffect, useState } from 'react'
import { Navigate } from 'react-router';
import { useParams } from "react-router-dom";
import { useAuth } from 'hooks/authentication';
import { useTranslation } from 'react-i18next';

function ConfirmationPage() {
  const [formData, setFormData] = useState({
    phoneNumber: '',
    otp: '',
    resent: false,
    manuallyEnteredAccodeCode: false,
    otp: '',
  });
  const { t } = useTranslation();
  const auth = useAuth()
  const { otp, token } = useParams()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (otp && token) {
      auth.authenticate(otp, token)
    }
  }, [])

  if (auth?.user?.isAuthenticated) {
    return <Navigate to="/survey" />
  }

  function resendAccessCode () {
    auth.resendAccessCode(formData)
    setFormData({ ...formData, resent: true })
  }

  function handleManuallyEnterAccessCode () {
    auth.authenticate(formData.otp, token)
    setFormData({ ...formData, manuallyEnteredAccodeCode: true })
  }

  function handleInputChange (key, value) {
    setFormData({ ...formData, [key]: value })
  }

  return (
    <>
      <main>
        <div className="page">
          <div id="register">
            <div>
              <h1>Confirm Your Account</h1>
              <p className="paragraph">
                We've sent you a message with a link to confirm your account. When you receive the message, click
                the link and open the page on your phone, tablet, or computer.
              </p>
            </div>

            <div>
              <h2>Trouble Shooting</h2>
              <p className="paragraph">
                If you do you receive a message from
                us within a couple minutes there could be a problem with the details you provided or temporary outaged.
              </p>
              <ol>
                <li>Resend Confirmation Link</li>
                <li>Enter Access Code</li>
                <li>Contact Support</li>
              </ol>
            </div>

            <div>
              <h2>Resend Confirmation Link</h2>
              <p className="paragraph">
                Enter the phone number that you used to register for your account and click the send button.
              </p>
              <div>
                <label htmlFor="phone-number">Phone Number</label>
                <input
                  id="phone-number"
                  className="form-field"
                  type="text"
                  placeholder=""
                  required
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                />
              </div>

              <button onClick={resendAccessCode} className="form-field" type="submit" disabled={formData.resent}>
                { formData.resent ? 'Sent' : 'Resend' }
              </button>
            </div>

            { token && (
              <div>
                <h2>Manual Enter Access Code</h2>
                <p className="paragraph">
                  If the confirmation link isn't working, you can try manually entering the
                  one-time passcode we include in the message send you.
                </p>
                <div>
                  <label htmlFor="access-code">Access Code</label>
                  <input
                    id="access-code"
                    className="form-field"
                    type="text"
                    placeholder=""
                    required
                    name="otp"
                    value={formData.otp}
                    onChange={(e) => handleInputChange('otp', e.target.value)}
                  />
                </div>
                <button
                  className="form-field"
                  type="submit"
                  onClick={handleManuallyEnterAccessCode}
                  disabled={formData.manuallyEnteredAccessCode}
                >
                  Check Access Code
                </button>
              </div>
            )}

            <div>
              <h2>Contact Us</h2>
              <p className="paragraph">
                If you are unable to receive a confirmation message or manually entering an access code
                responds with an error, please send use a message.
              </p>
              <div>
                <label htmlFor="phone-number">Phone Number</label>
                <input
                  id="phone-number"
                  className="form-field"
                  type="text"
                  placeholder=""
                  required
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  className="form-field"
                  type="text"
                  placeholder=""
                  required
                  name="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                ></textarea>
              </div>

              <button className="form-field" type="submit">
                { t('submitText') }
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default ConfirmationPage;
