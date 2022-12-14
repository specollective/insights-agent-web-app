import { useTranslation, Trans } from 'react-i18next'
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

  const translatedIntro = t("introParagraphs")
  console.log(translatedIntro)

  // const introParagraphs = [
  //   `Have you ever felt that "technology is too confusing" or "this is
  // not how I would use technology" or "I need something that actually
  // helps me"? Than you are the right person to help us out...`,
  //   `The fact is that technology is often made for technologists by
  // technologists. Current customer information does not include
  // everyone. With your help buildJUSTLY can help technologists
  // understand all kinds of customers.`,
  //   `When you agree to the study, we’ll ask you to install something we call the Insight Agent.`,
  // ]

  // const firstUnorderedListParagraphs = [
  //   `Once an hour, the Insight Agent will capture the programs and
  //   websites on the computer.`,
  //   `This information will be sent by internet to our servers.`,
  //   `All of the information will be collected with other information
  //   from other participants around the United States.`,
  //   `The servers will sort the information by type into categories like
  //   social media, entertainment, work productivity, education and
  //   more.`,
  // ]

  const privacyList = [
    `We use industry standard practices to safeguard your data.`,
    `Additionally, your data will be anonymized before we use it for
    research.`,
    `You are in control and can opt out of the study at any time.`,
  ]

  const whatWillHappenList = [
    `We will share our findings with technology builders so that they
    can build technology that’s useful for people like you and your
    community.`,
    `We want to make sure that all customers are represented.`,
  ]

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
              {t("LandingPrivacyList", { returnObjects: true }).map((p, i) => (
                <li className='py-2 md:py-6' key={`${p}-${i}`}>
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
              {whatWillHappenList.map((p, i) => (
                <li className='py-2 md:py-6' key={`${p}-${i}`}>
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

              <h4 className='font-bold pt-4'>Benefits</h4>
              <p className='pl-8 pt-4'>
                {t("LandingToYou")}
              </p>
              <p className='pl-8 pt-4'>
                {t("LandingToBuildJUSTLY")}
              </p>

              <h4 className='font-bold'>Risks</h4>
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

{/* <Trans i18nKey="LandingIntroParagraphs">
            <ul i18nIsDynamicList>
            {['rupert', 'max'].map(p => (
              <li className='py-2 md:py-6' key={`${p}-${p}`}>
                {bullet}
                {p}
              </li> */}
            // ))}
              {/* <li className='py-2 md:py-6' key={`${p}-${i}`}>
              {bullet}
              {p}
              </li> */}
            {/* </ul> */}
          {/* </Trans> */}
export default LandingPage
