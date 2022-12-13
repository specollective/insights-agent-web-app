import { useEffect } from 'react'
import { Navigate } from 'react-router'
import { useParams, Link } from "react-router-dom"
import { useAuth } from 'hooks/authentication'
import './ConfirmationPage.css'
import ProgressBar1 from '../../images/ProgressBar1.svg'
import SignUpForm from 'components/elements/SignUp'


function ConfirmationPage() {
  const auth = useAuth()
  const { otp, token } = useParams()
  // const [formData, setFormData] = useState({
  //   phoneNumber: '',
  //   otp: '',
  //   resent: false,
  //   manuallyEnteredAccodeCode: false,
  // });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (otp && token) {
      auth.authenticate(otp, token);
    }
  }, [auth, otp, token])

  // function resendAccessCode () {
  //   auth.resendAccessCode(formData)
  //   setFormData({ ...formData, resent: true })
  // }

  // function handleManuallyEnterAccessCode () {
  //   auth.authenticate(formData.otp, token)
  //   setFormData({ ...formData, manuallyEnteredAccodeCode: true })
  // }

  // function handleInputChange (key, value) {
  //   setFormData({ ...formData, [key]: value })
  // }

  if (auth?.user?.isAuthenticated) {
    return <Navigate to="/survey" />
  }

  return (
    <main id="ConfirmationPage">
      <div className="center">
        <div className='grid place-content-center pb-8 md:pt-8 md:pb-16'>
          <img src={ProgressBar1} alt='progress' />
        </div>
        <div>
          <h1 className='pb-12 px-8 text-base md:text-3xl font-semibold'>Thank you for helping us empower the building of a better future for all, through equitable technology.</h1>
          <p className='px-8'>
            We have received your information for participation. You should be receiving a text message to the phone number provided with next steps.
          </p>
        </div>

        <div className='grid place-content-center pt-16 text-sm md:text-xl underline'>
          <Link to='/'>Go back to Home</Link>
        </div>

        <hr />

        <div className="px-8">
          <p className='text-base pb-16'>
            If you have not received a text message please proceed to the following steps:
          </p>

          <ul className='list-decimal px-8'>
            <li>If you have not received a text message, please resubmit your Name and Phone number below.</li>
            <li>If you have already resubmitted your phone number and are still not receiving a text message, please </li>
            <li>If you have tried previous steps and are still not receiving a text message, please contact us at 800-555-1234</li>
          </ul>
        </div>

          {/*<div>
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
          </div>*/}

          {/* token && (
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
          )*/}

        </div>
        <SignUpForm />

    </main>
  )
}

export default ConfirmationPage;