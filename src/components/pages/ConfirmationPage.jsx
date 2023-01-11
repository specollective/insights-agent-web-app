import { useEffect } from 'react'
import { Navigate } from 'react-router'
import { useParams, Link } from "react-router-dom"
import { useAuth } from 'hooks/authentication'
import './ConfirmationPage.css'
import ProgressBar1 from '../../images/ProgressBar1.svg'
import ProgressBar1ES from '../../images/ProgressBar1ES.svg'
import SignUpForm from 'components/elements/SignUp'
import { useTranslation } from "react-i18next"

function ConfirmationPage() {
  const auth = useAuth()
  const { otp, token } = useParams()
  const { t } = useTranslation()
  const lang = localStorage.getItem('locale')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  useEffect(() => {
    if (otp && token) {
      auth.authenticate(otp, token)
    }
  }, [auth, otp, token])

  if (auth?.user?.isAuthenticated) {
    // TODO: Add dynamic routes for multiple surveys.
    return <Navigate to="/surveys/demo" />
  }

  return (
    <main id="ConfirmationPage">
      <div className="center">
        <div className='grid place-content-center pb-8 md:pt-8 md:pb-16'>
         {lang == 'en' ? <img src={ProgressBar1} alt='progress' /> : <img src={ProgressBar1ES} alt='progressES' />}
        </div>
        <div>
          <h1 className='pb-12 px-8 text-base md:text-3xl font-semibold'>
            {t("ConfirmationHeading")}
          </h1>
          <p className='px-8'>
            {t("ConfirmationWeHaveReceived")}
          </p>
        </div>

        <div className='grid place-content-center pt-16 text-sm md:text-xl underline'>
          <Link to='/'>{t("ConfirmationGoHome")}</Link>
        </div>

        <hr />

        <div className="px-8">
          <p className='text-base pb-5'>
            {t("ConfirmationNotReceivedInstructions")}
          </p>

          <ul className='list-decimal px-8'>
            <li>{t("ConfirmationNotReceivedFirst")}</li>
            <li>{t("ConfirmationNotReceivedSecond")}</li>
          </ul>
        </div>
      </div>
      
      <SignUpForm retry/>
    </main>
  )
}

export default ConfirmationPage