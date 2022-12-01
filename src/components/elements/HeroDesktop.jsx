import React from 'react';

const heroStyle = `
  flex 
  justify-between 
  items-end 
  h-48
  mb-20
  pb-5 
  pl-20
  pr-32  
  bg-green-100
`

export default function HeroDesktop() {
  return (
    <>
      <div className={heroStyle}>
        <h1 className="text-5xl text-white">
          build <br/> 
          JUSTLY
        </h1>
        <h2 className="text-4xl font-medium">Insights Agent Study</h2>
      </div>
    </>
  )
}; 