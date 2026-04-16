import React from 'react';
import callImage from '../../assets/call.png';
import textImage from '../../assets/text.png'
import videoImage from '../../assets/video.png'

const FriendsQuickCheckIN = () => {
    return (
        <div className='flex flex-col shadow-sm space-y-10 p-10'>
            <h1 className='font-normal text-xl'>Quick Check-In</h1>
            <div className='flex justify-between'>
                <button className='btn flex-col p-10'>
                    <img src={callImage} className='w-5 md:w-20 h-5 object-contain' alt="" />
                    Call

                </button>
                <button className='btn flex-col p-10'>
                    <img src={textImage} className='w-5 md:w-20 h-5 object-contain' alt="" />
                    Text

                </button>
                <button className='btn flex-col p-10'>
                    <img src={videoImage} className='w-5 md:w-20 h-5 object-contain' alt="" />
                    Video

                </button>
               
            </div>
            
        </div>
    );
};

export default FriendsQuickCheckIN;