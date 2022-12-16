import logoPlaceHolder from "../../images/insightsAgentIcon.png";
import { useTranslation } from 'react-i18next'


export default function Instructions() {
  const { t } = useTranslation()

  return (
    <ol className="mt-12 text-lg center">
      <li className=" before:content-['1'] before:mr-6 before:text-black before:font-semibold before:text-2xl list-none mt-6 mx-2 py-2">
        {t("InstructionsFirst")}
        <img
          className="mt-6 mx-10"
          src={logoPlaceHolder}
          alt="grey circle image placeholder for logo"
        />
      </li>
      <li className="before:content-['2'] before:mr-6 before:text-black before:font-semibold before:text-2xl list-none mt-6 mx-2 py-2">
        {t("InstructionsSecond")}
      </li>
      <li className="before:content-['3'] before:mr-6 before:text-black before:font-semibold before:text-2xl list-none mt-6 mx-2 py-2 ">
        {t("InstructionsThird")}
      </li>
      <li className="before:content-['4'] before:mr-6 before:text-black before:font-semibold before:text-2xl list-none mt-6 mx-2 py-2">
        {t("InstructionsFourth")}
      </li>
      <li className="before:content-['5'] before:mr-6 before:text-black before:font-semibold before:text-2xl list-none mt-6 mx-2 py-2">
        {t("InstructionsFifth")}
      </li>
    </ol>
  );
}
