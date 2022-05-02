import { LoremIpsum } from 'react-lorem-ipsum'
import './SuccessPage.css';

function SuccessPage() {
  return (
    <main id="SuccessPage">
      <div className="container">
        <h1>Thank You!</h1>
        <p>Your survey has been submitted</p>
        <p>
          Next, you should receive text message with instructions to open, download and install the Insights Agent
        </p>
      </div>
    </main>
  )
}

export default SuccessPage;
