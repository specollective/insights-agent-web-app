import { loremIpsum } from 'react-lorem-ipsum'
import logoPlaceHolder from '../../images/ellipse61.png'


export default function Instructions() {
  return (

      <ol className="mt-12 text-lg center">
        {/*add numbers*/}
        <li className="before:content-['1'] before:mr-6 before:text-black before:font-semibold before:text-2xl list-none mt-6 mx-2 py-2">
          Click Insights Agent icon on your desktop
          <img className="mt-6" src={logoPlaceHolder} alt="grey circle image placeholder for logo" />
        </li>
        <li className="before:content-['2'] before:mr-6 before:text-black before:font-semibold before:text-2xl list-none mt-6 mx-2 py-2">
          Enter your phone number that you used to sign up for this study
        </li>
        <li className=" before:content-['3'] before:mr-6 before:text-black before:font-semibold before:text-2xl list-none mt-6 mx-2 py-2">
          You will receive a 6 digit verification code via text to that phone
          number provided. Enter that code on the prompt
        </li>
        <li className=" before:content-['4'] before:mr-6 before:text-black before:font-semibold before:text-2xl list-none mt-6 mx-2 py-2">
          Please read the study reminder before pushing the Start button to
          start running the Insights Agent
        </li>
        <li className=" before:content-['5'] before:mr-6 before:text-black before:font-semibold before:text-2xl list-none mt-6 mx-2 py-2">
          If you have received an error message or if you are having trouble,
          please contact us at 800-XXX-XXXX or email us at
          help@insightsagent.com
        </li>
      </ol>
 
  );
}
