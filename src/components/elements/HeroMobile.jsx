import React from 'react';

const heroStyle = `
  flex 
  justify-between 
  items-end 
  h-32 
  mb-9 
  pb-3 
  pl-5 
  pr-2 
  bg-green-100
`

export default function HeroMobile() {
  return (
    <>
      <div className={heroStyle}>
        <h1 className="text-3xl text-white">
          build <br/> 
          JUSTLY
        </h1>
        <h2 className="text-xl font-normal">Insights Agent Study</h2>
      </div>
    </>
  )
};