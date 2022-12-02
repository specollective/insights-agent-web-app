import Instructions from 'components/elements/Instructions'
import { DOWNLOAD_URL } from 'constants/urls'

function DownloadPage() {
  return (
    <main>
      <div className="flex flex-col items-center  mt-12">
        <button className="invisible lg:visible w-350 p-4 rounded-small bg-[#37770D] border-black border-2">
          <a className="text-white" href={DOWNLOAD_URL}>
            Download for Mac
          </a>
        </button>
      </div>

      <div className="mt-28" id="installation">
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
