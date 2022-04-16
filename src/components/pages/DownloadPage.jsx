import Instructions from '../shared/Instructions'

function DownloadPage() {
  return (
    <>
      <div>
        <div className="download">
          <h1>Getting the App</h1>
          <button>Download for Windows</button>
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

export default DownloadPage;
