import { loremIpsum } from 'react-lorem-ipsum'

export default function Instructions() {
  return (
    <>
      <ol>
        {/*add numbers*/}
        <li>Click Insights Agent icon on your desktop</li>
        <li>Enter your phone number that you used to sign up for this study</li>
        <li>
          You will receive a 6 digit verification code via text to that phone
          number provided. Enter that code on the prompt
        </li>
        <li>
          Please read the study reminder before pushing the Start button to
          start running the Insights Agent
        </li>
        <li>
          If you have received an error message or if you are having trouble,
          please contact us at 800-XXX-XXXX or email us at
          help@insightsagent.com
        </li>
      </ol>
    </>
  );
}
