import { useContext } from 'react'
import 'components/shared/Layout.css'
import LocaleContext from 'utils/LocaleContext'
import { Link } from 'react-router-dom'
import i18n from 'utils/i18n'
import authenticationService from 'services/authentication'
import { useNavigate, useLocation, Navigate } from 'react-router-dom'
import { useAuth } from 'hooks/authentication'
import { ReactComponent as SmallLogo } from 'images/logo-small.svg'


function Layout(props) {
  const { locale } = useContext(LocaleContext);
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();

  function changeLocale (e) {
    if (locale !== e.target.name) {
      i18n.changeLanguage(e.target.name);
    }
  }

  async function logout() {
    const result = await auth.logout()
    navigate('/')
  }

  async function goToHomePage() {
    navigate('/')
  }

  const renderHeaderLogo = location.pathname !== '/';

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

export default Layout;
