import { Instructions } from '../../../components'
import './instructionPage.css'

export default function InstructionPage() {
  return (
    <>
      <div className='instructions'>
        <div id='setup'>
          <h3>
            Setup Instructions
          </h3>
          <Instructions />
        </div>
        <div id='installation'>
          <h3>
            Installation Instructions
          </h3>
          <Instructions />
        </div>
        <div id='uninstall'>
          <h3>
            Uninstall Instructions
          </h3>
          <Instructions />
        </div>
      </div>
    </>
  )
}