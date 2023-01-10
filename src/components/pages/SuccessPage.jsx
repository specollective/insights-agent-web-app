import { Link } from 'react-router-dom'
import ProgressBar2 from '../../images/ProgressBar2.svg'
import ProgressBar2ES from '../../images/ProgressBar2ES.svg'
import { useTranslation } from 'react-i18next'

function SuccessPage() {
  const { t } = useTranslation()
  const lang = localStorage.getItem('locale')

  return (
    <main className="px-10 md:px-40 xl:px-60 py-12 text-center">
      <div className='grid place-content-center pb-8 md:pt-8 md:pb-16'>
       { lang === 'en' ? <img src={ProgressBar2} alt='progress' /> : <img src={ProgressBar2ES} alt='progressES' />}
      </div>
      <h1 className='pb-7 md:pb-12 text-base md:text-3xl font-semibold'>
        {t("SuccessHeader")}
      </h1>

      <ul className='pl-8 md:pl-14 pb-12 list-disc text-left space-y-8 '>
        <li>
          {t("SuccessProcessing")}
        </li>
        <li>
          {t("SuccessTextMessage")}
        </li>
        <li>
          {t("SuccessIfYouDoNotReceive")}
        </li>
      </ul>

      <div>
        <a href='https://buildjustly.org/' target="_blank" rel="noreferrer" className='text-[#064187] underline md:no-underline md:hover:underline'>
          {t("SuccessLink")}
        </a>
      </div>
      
      <div className='hidden md:block align-right pt-5 text-xl underline'>
        <Link to='/'>{t("ConfirmationGoHome")}</Link>
      </div>

    </main>
  )
}

export default SuccessPage
