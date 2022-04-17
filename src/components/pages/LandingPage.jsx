import { LoremIpsum, loremIpsum } from 'react-lorem-ipsum'
import { v4 as uuidv4 } from 'uuid'
import SignUpForm from 'components/shared/SignUp'
import { useTranslation } from 'react-i18next'
import 'components/pages/LandingPage.css'

function LandingPage() {
  const { t } = useTranslation();

  return (
    <>
      <header id="organization">
        <h1>ORGANIZATION</h1>
      </header>

      <main id="landing-page">
        <div>
          <h2>{ t('landingPageHeading') }</h2>
          <SignUpForm />
        </div>

        <div>
          <div className="info-section">
            <LoremIpsum />
          </div>

          <ul className="info-bullets">
            {loremIpsum({ p: 4, avgSentencesPerParagraph: 2, }).map(text => (
              <li className="text" key={`${uuidv4()}${text}`}>
                {text}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2>{ t('landingPageFooterHeading') }</h2>
          <SignUpForm />
        </div>
      </main>
    </>
  )
}

export default LandingPage;
