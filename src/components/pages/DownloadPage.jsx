import Instructions from 'components/elements/Instructions'
import InstructionsUninstall from 'components/elements/InstructionsUninstall'
import { DOWNLOAD_URL } from 'constants/urls';
import downloadButton from "../../images/download-arrow.svg";


function DownloadPage() {
  return (
    <main>
    
      <div className="flex flex-col items-center  mt-40">
        <button className="hidden lg:flex p-4 rounded border-black border-2 bg-[#37770D] w-350">
          <img src={downloadButton} className="pr-4" alt="download image arrow pointing down" />
          <a className="text-white text-extrabold" href={DOWNLOAD_URL}>
            Download for Mac
          </a>
        </button>
      </div>

      <div className="mt-24" id="installation">
        <h1 className="center header font-medium text-2xl">
          Set-Up Instructions
        </h1>
        <Instructions />
      </div>

      <div className="mt-40 mr-6" id="uninstall">
        <h1 className="center header font-medium text-2xl">
          Uninstall Instructions
        </h1>
        <InstructionsUninstall />
      </div>
    </main>
  );
}

export default DownloadPage;
