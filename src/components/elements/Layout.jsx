import { useContext, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import HeroDesktop from './HeroDesktop'
import LocaleContext from 'utils/LocaleContext'
import i18n from 'utils/i18n'
import 'components/elements/Layout.css'

function Layout(props) {
  const { locale } = useContext(LocaleContext)
  const navigate = useNavigate()
  const location = useLocation()
  const [selected, setSelected] = useState('true')

  function changeLocale (e) {
    if (locale !== e.target.name) {
      i18n.changeLanguage(e.target.name)
      setSelected(!selected)
    }

  }

  function goToHomePage() {
    navigate('/')
  }

  return(
    <>
      <header className='header'>
        <div className='row px-9'>
          <div className='column align-left font-light text-gray-500 md:hidden'>
            <button onClick={goToHomePage}>buildJustly</button>
          </div>

          <div className='languages column align-right'>
            <button className={!selected ? 'font-semibold' : ''} name='es' onClick={changeLocale}>Español</button>
            &nbsp;|&nbsp;
            <button className={selected ? 'font-semibold' : ''} name='en' onClick={changeLocale}>English</button>
          </div>
        </div>
      </header>

      <div className="hidden md:block">
        <HeroDesktop />
      </div>

      <div>
        {props.children}
      </div>
    </>
  )
}

export default Layout
