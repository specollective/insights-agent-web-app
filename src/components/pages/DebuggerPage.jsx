import './SuccessPage.css'

function Debugger() {
  async function testFetch () {
    const devUrl = 'http://127.0.0.1:5000/api/ping'
    const prodUrl = 'https://my-app-mvxd9.ondigitalocean.app/api/ping'

    const response = await fetch(devUrl, {
      mode: 'cors',
      cache: 'reload',
      credentials: 'include',
    });

    const json = await response.json();
    console.log(response.ok)
    console.log(json)
  }

  return (
    <main id="Debugger">
      <div className="container">
        <button onClick={testFetch}>Test 1</button>
      </div>
    </main>
  )
}

export default Debugger
