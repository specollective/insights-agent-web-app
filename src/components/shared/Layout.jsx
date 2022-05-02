import { useContext } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import LocaleContext from 'utils/LocaleContext'
import i18n from 'utils/i18n'
import { ReactComponent as SmallLogo } from 'images/logo-small.svg'
import 'components/shared/Layout.css'

function Layout(props) {
  const { locale } = useContext(LocaleContext)
  const navigate = useNavigate()
  const location = useLocation()
  const renderHeaderLogo = location.pathname !== '/'

  function changeLocale (e) {
    if (locale !== e.target.name) {
      i18n.changeLanguage(e.target.name)
    }
  }

  function goToHomePage() {
    navigate('/')
  }

  return(
    <>
      <header className="header">
        <div className="row">
          <div className="column align-left">
            { renderHeaderLogo && <SmallLogo onClick={goToHomePage} /> }
          </div>

          <div className="languages column align-right">
            <button name="es" onClick={changeLocale}>Español</button> |
            <button name="en" onClick={changeLocale}>English</button>
          </div>
        </div>
      </header>

      <div>
        {props.children}
      </div>
    </>
  )
}

export default Layout
