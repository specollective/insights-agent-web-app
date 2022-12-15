import { useTranslation } from "react-i18next";
import React from 'react'

export default function HeroMobile() {
  const { t } = useTranslation()

  return (
      <section className='flex justify-between items-end h-32 mb-9 pb-3 pl-5 pr-2 bg-green-100'>
        <h1 className='text-3xl text-white'>
          build <br/> 
          JUSTLY
        </h1>
        <h2 className='text-xl font-normal'>{t("InsightsAgentStudy")}</h2>
      </section>
  )
};