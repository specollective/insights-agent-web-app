import { LoremIpsum } from 'react-lorem-ipsum'
import './header.css'

export default function Header() {
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