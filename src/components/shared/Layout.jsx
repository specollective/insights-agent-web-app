import { useContext } from 'react'
import 'components/shared/Layout.css'
import LocaleContext from 'utils/LocaleContext'
import { Link } from 'react-router-dom'
import i18n from 'utils/i18n'
import authenticationService from 'services/authentication'
import { useNavigate, Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/authentication'

export default function Layout(props) {
  const { locale } = useContext(LocaleContext);
  const navigate = useNavigate();
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

  return(
    <>
      <header className="header">
        <div className="row">
          <div className="column align-left">
            <Link to="/">Home</Link>
            {auth?.user?.isAuthenticated && <button onClick={logout}>Logout</button> }
          </div>
          <div className="languages column align-right">
            <button name="es" onClick={changeLocale}>Español</button> |
            <button name="en" onClick={changeLocale}>English</button>
          </div>
        </div>

        <div className="organization">
          <h1>build JUSTLY</h1>
          <h3 className="study-name">Insights Agent Study</h3>
        </div>
      </header>

      <div>
        {props.children}
      </div>
    </>
  )
}
