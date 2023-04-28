import React from 'react'

export default function Chat() {
  return (
    <div>
      <div className='w-[520px] h-[820px] border-black border-[2px] relative' >
        <div className='h-[84px] border-black border-b-2 flex justify-between items-center p-4'>
          <div>
            <p className='text-[22px]'>Product Name</p>
            <p className='text-[12px]'>Username</p>
          </div>
          <div className='flex'>
            <img className='w-[52px] h-[52px] pr-1' src="https://placehold.jp/52x52.png"></img>
            <button className=''>
              |
            </button>
          </div>
        </div>
        <div className='h-full'>
          <div className='h-[60%] overflow-y-scroll'>

          </div>
          <div className='absolute bottom-0 w-full'>
            <div className='mb-4 mt-6 flex justify-center'>
              <input className='w-[386px] h-[32px] rounded-[50px] bg-[#D9D9D9] text-[12px]' />
            </div>
            <div className='flex justify-center'>
              <button className='w-20 h-[39px] mr-[29px] text-base border-black border-[1px]'>Counter</button>
              <button className='w-20 h-[39px] mr-[29px] text-base border-black border-[1px]'>Accept</button>
              <button className='w-20 h-[39px] text-base border-black border-[1px]'>Decline</button>
            </div>
            <div className='flex justify-center mb-5 mt-6'>
              <button className='w-[192px] h-[44px] text-xl border-black border-[1px]'>Negotiate</button>
              <button className='w-[192px] h-[44px] text-xl border-black border-[1px]'>Barter</button>
            </div>
          </div>
        </div>
      </div>
    </div>





  )
}
