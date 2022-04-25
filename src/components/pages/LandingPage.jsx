import { LoremIpsum, loremIpsum } from 'react-lorem-ipsum'
import { v4 as uuidv4 } from 'uuid'
import SignUpForm from 'components/shared/SignUp'
import { useTranslation } from 'react-i18next'
import 'components/pages/LandingPage.css'

function LandingPage() {
  const { t } = useTranslation();

  return (
    <>
      <main id="landing-page">
        <div>
          <div className="video-responsive">
            <iframe
              className="video-iframe"
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/ScMzIvxBSi4`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>

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
          <h2>{ t('landingPageHeading') }</h2>
          <SignUpForm />
        </div>
      </main>
    </>
  )
}

export default LandingPage;
