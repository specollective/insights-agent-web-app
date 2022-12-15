import { useTranslation } from 'react-i18next'
import SignUpForm from 'components/elements/SignUp'
import HeroMobile from '../elements/HeroMobile'
import 'components/pages/LandingPage.css'
import TabImage from '../../images/tabsImage.svg'
import RightTaskbar from '../../images/rightTaskbar.svg'

function LandingPage() {
  const { t } = useTranslation()

  const bullet = (
    <div className='inline'>
      <div className='bullet'></div>
    </div>
  )
  
  return (
    <main>
      <div className="visible md:hidden">
        <HeroMobile />
      </div>

      <div className='px-12 md:px-32 lg:px-56 xl:px-80 xl:text-xl'>
        <div className='py-6'>
          <div className='video-responsive'>
            <iframe
              src='https://www.youtube.com/embed/ScMzIvxBSi4'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
              title='Embedded youtube'
            />
          </div>
        </div>

        <div>
          {t("LandingIntroParagraphs", { returnObjects: true }).map(p => (
            <p className='py-2 lg:py-8' key={p}>
              {p}
            </p>
          ))}

          <div className='grid place-content-center py-8'>
            <img alt='tabs' src={TabImage}></img>
          </div>

          <ul className='px-10'>
            {t("LandingFirstUnorderedList", { returnObjects: true }).map(p => (
              <li className='py-2 md:py-6' key={p}>
                {bullet}
                {p}
              </li>
            ))}
          </ul>

          <section>
            <div className='py-10 font-extrabold text-center text-xl md:text-2xl lg:text-3xl'>
              <h3>{t("LandingPrivacyImportant")}</h3>
            </div>

            <ul className='px-10'>
              {t("LandingPrivacyList", { returnObjects: true }).map(p => (
                <li className='py-2 md:py-6' key={p}>
                  {bullet}
                  {p}
                </li>
              ))}
            </ul>
          </section>

          <div className='grid place-content-center py-8'>
            <img alt='tabs' src={RightTaskbar}></img>
          </div>

          <section>
            <div className='py-10 font-extrabold text-center text-xl md:text-2xl lg:text-3xl'>
              <h3>{t("LandingWhatWillHappen")}:</h3>
            </div>

            <ul className='px-10'>
              {t("LandingWhatWillHappenList", { returnObjects: true }).map(p => (
                <li className='py-2 md:py-6' key={p}>
                  {bullet}
                  {p}
                </li>
              ))}
            </ul>
            <div className='pt-10'>
              <p>
                {t("LandingYouAreTheExpert")}
              </p>
              <p>
                {t("LandingWellAsk")}
              </p>
            </div>
          </section>

          <section>
            <div className='border border-black rounded mt-10 p-4 md:p-6 lg:p-16'>
              <h4 className='font-bold'>{t("LandingPurposeOfProject")}</h4>
              <p className='pl-8 pt-4'>
              {t("LandingStudyComputerUse")}
              </p>

              <h4 className='font-bold pt-4'>{t("LandingDataCollected")}</h4>
              <ul>
                <li className='pl-8 pt-4'>
                  • {t("LandingOneTimeStudy")}
                </li>
                <li className='pl-8'>
                  • {t("LandingWebsiteAndApplication")}
                </li>
                <li className='pl-8'>• {t("LandingInternetConnectivity")}</li>
                <li className='pl-8'>
                  • {t("LandingNoAdditionalData")}
                </li>
                <li className='pl-8'>
                  • {t("LandingNoAdditionalPII")}
                </li>
              </ul>

              <h4 className='font-bold pt-4'>{t("LandingBenefits")}</h4>
              <p className='pl-8 pt-4'>
                {t("LandingToYou")}
              </p>
              <p className='pl-8 pt-4'>
                {t("LandingToBuildJUSTLY")}
              </p>

              <h4 className='font-bold'>{t("LandingRisks")}</h4>
              <p className='pl-8 pt-4'>
                {t("LandingNoComputerPerformance")}
              </p>
            </div>
          </section>
        </div>
      </div>
      <SignUpForm />
    </main>
  )
}


export default LandingPage
