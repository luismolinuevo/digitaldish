import React from 'react'

export default function BiggerCard({img, title}) {
  return (
    <div className='w-[348px] h-[421px]'>
        <img src={img} alt="img" className='h-[348px]'/>
        <h1 className='text-[38px] mt-4'>{title}</h1>
    </div>
  )
}
