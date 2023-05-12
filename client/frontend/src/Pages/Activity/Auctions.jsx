import React from 'react'

export default function Auctions() {
  return (
    <div>
        <div className='flex w-[1171px] h-[120px] border-[1px] border-black ml-[188px] justify-between'>
            <div className='flex'>
                <div className='py-3'>
                    <h1 className='text-[27px]'>Product Title</h1>
                    <p className='text-[27px]'>Username</p>
                </div>
                <img></img>
                <div className=' flex items-center px-5 w-[375px] '>
                    <h1 className='text-[27px]'>Product Description</h1>
                </div>
            </div>
            <div className='flex items-center'>
                <h1 className='text-[27px]'>Expired</h1>
                <h1 className='text-[27px] pl-[65px] px-[10px]'>Sold: $00.00</h1>
            </div>
        </div>
    </div>
  )
}
