import { Instructions } from '../../../components'
import './download.css'

export default function Download() {
  return (
    <>
      <div className='instructions'>
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