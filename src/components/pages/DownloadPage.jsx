import HeroMobile from 'components/elements/HeroMobile';
import Instructions from 'components/elements/Instructions'
import { DOWNLOAD_URL } from 'constants/urls'

function DownloadPage() {
  return (
    <main>
      <div className="visible md:hidden">
        <HeroMobile />
      </div>
      <div>
        <h1>Getting the App</h1>
        <a href={DOWNLOAD_URL}>
          Download for Mac
        </a>
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
    </main>
  )
}

export default DownloadPage;
