import { useContext, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import HeroDesktop from './HeroDesktop'
import LocaleContext from 'utils/LocaleContext'
import 'components/elements/Layout.css'

function Layout(props) {
  const { locale, setLocale } = useContext(LocaleContext)
  const navigate = useNavigate()
    
  function changeLocale (e) {
    setLocale(e.target.name)
  }

  function goToHomePage() {
    navigate('/')
  }

  return(
    <>
      <header className='header'>
        <div className='row px-9'>
          <div className='column align-left font-light text-gray-500 md:hidden'>
            <button onClick={goToHomePage}>buildJUSTLY</button>
          </div>

          <div className='languages column align-right'>
            <button className={(locale === 'es') ? 'font-semibold' : ''} name='es' onClick={changeLocale}>Español</button>
            &nbsp;|&nbsp;
            <button className={(locale === 'en') ? 'font-semibold' : ''} name='en' onClick={changeLocale}>English</button>
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
