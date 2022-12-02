import Instructions from 'components/elements/Instructions'
import { DOWNLOAD_URL } from 'constants/urls'

function DownloadPage() {
  return (
    <main>
      <div className="center mt-6">
        <button className="w-350 p-4 rounded bg-[#37770D] border-black">
          <a className="text-white" href={DOWNLOAD_URL}>
            Download for Mac
          </a>
        </button>
      </div>

      <div className="mt-6" id="installation">
        <h3 className="center header font-medium text-2xl">
          Set-Up Instructions
        </h3>
        <Instructions />
      </div>

      <div className="mt-6 mr-6" id="uninstall">
        <h3 className="center header font-medium text-2xl">
          Uninstall Instructions
        </h3>
        <Instructions />
      </div>
    </main>
  );
}

export default DownloadPage;
