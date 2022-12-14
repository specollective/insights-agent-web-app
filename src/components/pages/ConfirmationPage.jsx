import { useEffect } from 'react'
import { Navigate } from 'react-router'
import { useParams, Link } from "react-router-dom"
import { useAuth } from 'hooks/authentication'
import './ConfirmationPage.css'
import ProgressBar1 from '../../images/ProgressBar1.svg'
import SignUpForm from 'components/elements/SignUp'
import { useTranslation } from "react-i18next";



function ConfirmationPage() {
  const auth = useAuth()
  const { otp, token } = useParams()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (otp && token) {
      auth.authenticate(otp, token);
    }
  }, [auth, otp, token])

  if (auth?.user?.isAuthenticated) {
    // Hardcode survey id for now because we only have one.
    return <Navigate to="/surveys/1" />
  }

  return (
    <main id="ConfirmationPage">
      <div className="center">
        <div className='grid place-content-center pb-8 md:pt-8 md:pb-16'>
          <img src={ProgressBar1} alt='progress' />
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
          <p className='text-base pb-16'>
            {t("ConfirmationNotReceivedInstructions")}
          </p>

          <ul className='list-decimal px-8'>
            <li>{t("ConfirmationNotReceivedFirst")}</li>
            <li>{t("ConfirmationNotReceivedSecond")}</li>
          </ul>
        </div>

      </div>
      
      <SignUpForm />
    </main>
  )
}

export default ConfirmationPage;