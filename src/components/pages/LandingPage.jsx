import { useTranslation } from 'react-i18next'
import SignUpForm from 'components/shared/SignUp'
import { ReactComponent as Logo } from 'images/logo.svg'
import 'components/pages/LandingPage.css'

function LandingPage() {
  const { t } = useTranslation();

  return (
    <main>
      <div className="organization">
        <Logo />
      </div>

      <div>
        <div className="video-container">
          <div className="video-responsive">
            <iframe
              className="video-iframe"
              src="https://www.youtube.com/embed/gN7XTqIMQ_Y"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
        </div>

        <div className="container">
          <p>
            Have you ever felt that "technology is too confusing" or "this is not how I would use technology" or "I need something that actually helps me"? Than you are the right person to help us out...
          </p>

          <p>
            The fact is that technology is often made for technologists by technologists. Current customer information does not include everyone. With your help buildJUSTLY can help technologists understand all kinds of customers.
          </p>

          <p>
            When you agree to the study, we’ll ask you to install something we call the Insight Agent.
          </p>

          <ul>
            <li>Once an hour, the Insight Agent will capture the programs and websites on the computer.</li>
            <li>This information will be sent by internet to our servers.</li>
            <li>All of the information will be collected with other information from other participants around the United States.</li>
            <li>The servers will sort the information by type into categories like social media, entertainment, work productivity, education and more.</li>
          </ul>
        </div>
      </div>

      <div className="container">
        <h2>{ t('landingPageHeading') }</h2>
        <SignUpForm />
      </div>
    </main>
  )
}

export default LandingPage;
