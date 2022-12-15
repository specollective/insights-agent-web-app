import { useTranslation } from "react-i18next";
import React from 'react'

export default function HeroDesktop() {
  const { t } = useTranslation()

  return (
      <section className='flex justify-between items-end h-48 pb-5 pl-20 pr-32 bg-green-100 font-poppins'>
        <h1 className='text-5xl text-white'>
          build <br/> 

          JUSTLY
        </h1>
        <h2 className='text-4xl font-semibold'>{t("InsightsAgentStudy")}</h2>
      </section>

  )
}; 

