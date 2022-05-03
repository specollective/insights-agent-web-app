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

      <div className="content">
        <div className="video-container">
          <div className="video-responsive">
            <iframe
              className="video-iframe"
              src="https://www.youtube.com/embed/ScMzIvxBSi4"
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

          <h3>Your Privacy is Important</h3>

          <ul>
            <li>We use industry standard practices to safeguard your data.</li>
            <li>Additionally, your data will be anonymized before we use it for research.</li>
            <li>You are in control and can opt out of the study at any time. </li>
          </ul>

          <h3>What will happen to the data:</h3>

          <ul>
            <li>We will share our findings with technology builders so that they can build technology that’s useful for people like you and your community.</li>
            <li>We want to make sure that all customers are represented.</li>
          </ul>

          <p>
            { "You are the expert of you and we'll pay you for that expertise. We'll compensate you at the beginning of the study and at the conclusion of the study." }
          </p>

          <p>
            { "We'll also ask you for additional information through voluntary surveys and interviews throughout the study period." }
          </p>

          <div className="survey-overview">
            <h4>Purpose of the Research Project</h4>
            <p>Study computer use in underserved populations</p>

            <h4>Data Collected</h4>
            <ul>
              <li>A one time survey of demographic information</li>
              <li>Website and application useage, anonymized for privacy</li>
              <li>Internet connectivity statistic</li>
              <li>No additional data will be collected as part of this study</li>
              <li>No additional PII data will be collected as part of this study</li>
            </ul>

            <h4>Benefits</h4>
            <p>To you: $25 gift card at sign up, $75 gift card at completion.</p>
            <p>To buildJUSTLY: Data to help understand computer usage by demographics</p>

            <h4>Risks</h4>
            <p>No computer performance issues identified</p>
          </div>
        </div>
      </div>

      <SignUpForm />
    </main>
  )
}

export default LandingPage;
