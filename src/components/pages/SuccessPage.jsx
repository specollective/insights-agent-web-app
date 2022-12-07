
function SuccessPage() {
  return (
    <main className="px-10 md:px-40 pt-12 md:pt-0 text-center">
      <h1 className='pb-7 md:pb-12 text-base md:text-3xl font-semibold'>
        Thank you for providing your data and helping us build the future of technology - for everyone.
      </h1>

      <ul className='pl-8 md:pl-14 pb-12 list-disc text-left space-y-8 '>
        <li>
          We are processing your information now and we’ll notify you with next steps.
        </li>
        <li>
          You’ll receive a text message at the number you provided.
        </li>
        <li>
          If you do not receive a message within 7 days, please send an email to tech4all@buildjustly.org and mention the Insights Agent.
        </li>
      </ul>

      <a href='https://buildjustly.org/' className='text-[#064187] underline md:no-underline md:hover:underline'>
        Visit buildJUSTLY.org
      </a>

    </main>
  )
}

export default SuccessPage
