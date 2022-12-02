import { loremIpsum } from 'react-lorem-ipsum'
import logoPlaceHolder from '../../images/ellipse61.png'


export default function Instructions() {
  return (
    <>
      <ol className="mt-12 text-lg center">
        {/*add numbers*/}
        <li className="mt-6 mx-10 px-6 py-2 list-decimal">
          Click Insights Agent icon on your desktop
           <img className="mt-6" src={logoPlaceHolder}/>
        </li>
        <li className="mt-6 mx-10 px-6 py-2 list-decimal">
          Enter your phone number that you used to sign up for this study
        </li>
        <li className="mt-6 mx-10 px-6 py-2 list-decimal">
          You will receive a 6 digit verification code via text to that phone
          number provided. Enter that code on the prompt
        </li>
        <li className="mt-6 mx-10 px-6 py-2 list-decimal">
          Please read the study reminder before pushing the Start button to
          start running the Insights Agent
        </li>
        <li className=" mt-6 mx-10 px-6 py-2 list-decimal">
          If you have received an error message or if you are having trouble,
          please contact us at 800-XXX-XXXX or email us at
          help@insightsagent.com
        </li>
      </ol>
    </>
  );
}
