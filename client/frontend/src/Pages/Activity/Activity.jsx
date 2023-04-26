import React, {useState} from 'react'
import axios from "axios";
import OffersRecieved from './OffersRecieved';
import Chat from './chat';

export default function Activity() {
    const [activeButton, setActiveButton] = useState(null);

    const handleClick = (buttonIndex) => {
      setActiveButton(buttonIndex);
    }
  return (
    <div className='flex px-20'>
        <div className='flex flex-col cursor-pointer'>
            <h1 className={'text-left text-[44px]'}>Activity</h1>
            <button className={`text-left text-[27px] ${activeButton === 0 ? 'border-b-2 border-black' : ''}`} onClick={() => handleClick(0)}>Offers Recieved</button>
            <button className={`text-left text-[27px] ${activeButton === 1 ? 'border-b-2 border-black' : ''}`} onClick={() => handleClick(1)}>Offers Sent</button>
            <button className={`text-left text-[27px] ${activeButton === 2 ? 'border-b-2 border-black' : ''}`} onClick={() => handleClick(2)}>Auctions</button>
            <button className={`text-left text-[27px] ${activeButton === 3 ? 'border-b-2 border-black' : ''}`} onClick={() => handleClick(3)}>Past Purchases</button>
        </div>
        <div>
            <div className='px-20'>
                <div className='flex'>
                    <p>Messages</p>
                    <p>Sort by: choice</p>
                    <p>Status</p>
                </div>
                <div>
                    {activeButton === 0 ? <OffersRecieved/> : ""}
                    
                </div>
            </div>
        </div>
        <div>
            <Chat/>
        </div>
    </div>
  )
}
