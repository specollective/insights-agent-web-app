import { LoremIpsum, loremIpsum } from 'react-lorem-ipsum'
import SignUp from '../shared/SignUp'
import './LandingPage.css'

function LandingPage() {
  return (
    <div id="landing-page">
      <h1>Sign up to participate in our study!</h1>

      <SignUp />

      <div>
        <div className="info-section">
          <LoremIpsum />
        </div>

        <ul className="info-bullets">
          {loremIpsum({ p: 4, avgSentencesPerParagraph: 2, }).map(text => (
            <li className='text' key ={text}>
              {text}
            </li>
          ))}
        </ul>
      </div>

      <h2>
        $XXX for participating in our research study which can go towards your computer purchase.
      </h2>

      <SignUp />
    </div>
  )
}

export default LandingPage;
