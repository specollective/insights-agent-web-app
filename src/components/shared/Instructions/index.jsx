import { loremIpsum } from 'react-lorem-ipsum'
import './instructions.css'

export default function Instructions() {
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