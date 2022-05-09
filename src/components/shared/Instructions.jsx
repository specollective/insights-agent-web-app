import { loremIpsum } from 'react-lorem-ipsum'
import { useTranslation } from 'react-i18next'

export default function Instructions() {
  const { t } = useTranslation();

  return (
    <>
      <ol>
        {loremIpsum({ p:5, avgSentencesPerParagraph: 2 }).map(text => (
          <li className='text' key={text}>
            {text}
          </li>
        ))}
      </ol>
    </>
  )
}
