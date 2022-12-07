import { Link } from 'react-router-dom'

function SuccessPage() {
  return (
    <main className="px-10 md:px-40 xl:px-60 py-12 text-center">
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

      <div>
        <a href='https://buildjustly.org/' target="_blank" rel="noreferrer" className='text-[#064187] underline md:no-underline md:hover:underline'>
          Visit buildJUSTLY.org
        </a>
      </div>
      
      <div className='hidden md:block float-right pt-5 text-xl underline'>
        <Link to='/' className=''>Go back to Home</Link>
      </div>

    </main>
  )
}

export default SuccessPage
