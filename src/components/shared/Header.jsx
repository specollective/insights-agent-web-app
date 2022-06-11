import { LoremIpsum } from 'react-lorem-ipsum'
import './Header.css'
import { useTranslation } from 'react-i18next'

export default function Header() {
  const { t } = useTranslation();

  return (
    <>
      <div id='banner'>
        <h1>
          Insights Agent Research Study
        </h1>
        <p id='intro'>
          <LoremIpsum />
        </p>
      </div>
    </>
  )
}
