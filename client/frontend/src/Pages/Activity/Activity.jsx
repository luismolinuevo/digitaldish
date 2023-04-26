import React from 'react'
import axios from "axios";
import OffersRecieved from './OffersRecieved';
import Chat from './chat';

export default function Activity() {
  return (
    <div className='flex px-20'>
        <div className='flex flex-col cursor-pointer'>
            <h1 className='text-left text-[44px]'>Activity</h1>
            <button className='text-left text-[27px]'>Offers Recieved</button>
            <button className='text-left text-[27px]'>Offers Sent</button>
            <button className='text-left text-[27px]'>Auctions</button>
            <button className='text-left text-[27px]'>Past Purchases</button>
        </div>
        <div>
            <div className='px-20'>
                <div className='flex'>
                    <p>Messages</p>
                    <p>Sort by: choice</p>
                    <p>Status</p>
                </div>
                <div >
                    <OffersRecieved/>
                </div>
            </div>
        </div>
        <div>
            <Chat/>
        </div>
    </div>
  )
}
