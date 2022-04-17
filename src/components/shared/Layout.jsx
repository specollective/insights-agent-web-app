import { useContext } from 'react'
import 'components/shared/Layout.css'
import LocaleContext from 'utils/LocaleContext'
import i18n from 'utils/i18n'

export default function Layout(props) {
  const { locale } = useContext(LocaleContext);

  function changeLocale (e) {
    if (locale !== e.target.name) {
      i18n.changeLanguage(e.target.name);
    }
  }

  return(
    <>
      <div id="languages">
        <button name="en" onClick={changeLocale}>English</button> |
        <button name="es" onClick={changeLocale}>Español</button>
      </div>
      <div>
        {props.children}
      </div>
    </>
  )
}
