import { loremIpsum } from 'react-lorem-ipsum'
import logoPlaceHolder from '../../images/ellipse61.png'


export default function Instructions() {
  return (
   
      <ol className="mt-12 text-lg center">
        {/*add numbers*/}
        <li className=" before:content-['1'] before:text-black before:text-2xl before:font-semibold before:mr-6 mt-6 mx-2 py-2 list-none">
          Click Insights Agent icon on your desktop
          <img className="mt-6 mx-10" src={logoPlaceHolder} />
        </li>
        <li className="before:content-['2'] before:text-black before:text-2xl before:font-semibold before:mr-6 mt-6 mx-2 py-2 list-none">
          Enter your phone number that you used to sign up for this study
        </li>
        <li className="before:content-['3'] before:text-black before:text-2xl before:font-semibold before:mr-6 mt-6 mx-2 py-2 list-none ">
          You will receive a 6 digit verification code via text to that phone
          number provided. Enter that code on the prompt
        </li>
        <li className="before:content-['4'] before:text-black before:text-2xl before:font-semibold before:mr-6 mt-6 mx-2 py-2 list-none ">
          Please read the study reminder before pushing the Start button to
          start running the Insights Agent
        </li>
        <li className="before:content-['5'] before:text-black before:text-2xl before:font-semibold before:mr-6 mt-6 mx-2 py-2 list-none ">
          If you have received an error message or if you are having trouble,
          please contact us at 800-XXX-XXXX or email us at
          help@insightsagent.com
        </li>
      </ol>
   
  );
}
