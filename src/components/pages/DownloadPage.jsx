import HeroMobile from 'components/elements/HeroMobile';
import Instructions from 'components/elements/Instructions'
import InstructionsUninstall from 'components/elements/InstructionsUninstall'
import { DOWNLOAD_URL } from 'constants/urls';
import downloadButton from "../../images/download-arrow.svg";


function DownloadPage() {
  return (
    <main>
      <h1 className="sr-only">Download Page</h1>
    
      <section className="flex flex-col items-center mt-40">
        <button className="hidden lg:flex p-4 rounded border-black border-2 bg-[#37770D] w-350">
          <img src={downloadButton} className="pr-4" alt="download image arrow pointing down" />
          <a className="text-white text-extrabold" href={DOWNLOAD_URL}>
            Download for Mac
          </a>
        </button>
      </section>

      <section className="mt-24">
        <h2 className="header font-medium text-2xl">
          Set-Up Instructions
        </h2>
        <Instructions />
      </section>

      <section className="mt-40 mr-6">
        <h2 className="center header font-medium text-2xl">
          Uninstall Instructions
        </h2>
        <InstructionsUninstall />
      </section>
    </main>
  );
}

export default DownloadPage;
