import Instructions from 'components/elements/Instructions'
import { DOWNLOAD_URL } from 'constants/urls';
import downloadButton from "../../images/download-arrow.svg";


function DownloadPage() {
  return (
    <main>
      <div className="flex flex-col items-center  mt-12">
        <button className="invisible lg:visible w-350 p-4 rounded bg-[#37770D] border-black border-2 flex">
          <img src={downloadButton} className="pr-4"/>
          <a className="text-white text-extrabold" href={DOWNLOAD_URL}>
            Download for Mac
          </a>
        </button>
      </div>

      <div className="mt-28" id="installation">
        <h3 className="center header font-medium text-xl">
          Set-Up Instructions
        </h3>
        <Instructions />
      </div>

      <div className="mt-6 mr-6" id="uninstall">
        <h3 className="center header font-medium text-xl">
          Uninstall Instructions
        </h3>
        <Instructions />
      </div>
    </main>
  );
}

export default DownloadPage;
