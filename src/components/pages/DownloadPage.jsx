import Instructions from 'components/shared/Instructions'
import { DOWNLOAD_URL } from 'constants/urls'
import { useTranslation } from 'react-i18next'

function DownloadPage() {
  const { t } = useTranslation();

  return (
    <main>
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
