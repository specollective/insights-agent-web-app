import Instructions from 'components/shared/Instructions'

function DownloadPage() {
  return (
    <>
      <div>
        <div className="jumbotron">
          <h1>Getting the App</h1>
          <a href="https://github.com/specollective/electron-skeleton/releases/download/untagged-d100a80ecad466b5e90b/electron-skeleton-darwin-x64-1.0.0.zip">
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
      </div>
    </>
  )
}

export default DownloadPage;
