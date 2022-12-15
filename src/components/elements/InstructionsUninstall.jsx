import { loremIpsum } from 'react-lorem-ipsum'
import logoPlaceHolder from '../../images/ellipse61.png'
import { useTranslation } from 'react-i18next'



export default function Instructions() {
  const { t } = useTranslation()

  return (

      <ol className="mt-12 text-lg center">
        {/*add numbers*/}
        <li className="before:content-['1'] before:mr-6 before:text-black before:font-semibold before:text-2xl list-none mt-6 mx-2 py-2">
          {t("InstructionsFirst")}
          <img className="mt-6" src={logoPlaceHolder} alt="grey circle image placeholder for logo" />
        </li>
        <li className="before:content-['2'] before:mr-6 before:text-black before:font-semibold before:text-2xl list-none mt-6 mx-2 py-2">
          {t("UninstallSecond")}
        </li>
        <li className=" before:content-['3'] before:mr-6 before:text-black before:font-semibold before:text-2xl list-none mt-6 mx-2 py-2">
          {t("UninstallThird")}
        </li>
        <li className=" before:content-['4'] before:mr-6 before:text-black before:font-semibold before:text-2xl list-none mt-6 mx-2 py-2">
          {t("UninstallFourth")}
        </li>
        <li className=" before:content-['5'] before:mr-6 before:text-black before:font-semibold before:text-2xl list-none mt-6 mx-2 py-2">
          {t("UninstallFifth")}
        </li>
      </ol>
 
  );
}
