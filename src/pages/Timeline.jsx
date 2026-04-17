import React from 'react';
import { useTimeline } from '../context/useTimeline';
import callImg from '../assets/call.png';
import textImg from '../assets/text.png';
import videoImg from '../assets/video.png';


const Timeline = () => {
    const {timeLine} = useTimeline();
    const actionImages = {
        "Call":callImg,
        "Text":textImg,
        "Video":videoImg
    }
    if(timeLine.length === 0){
        return (
           <div className='flex justify-center items-center min-h-screen'>
                <h1 className='text-3xl font-bold'>
                    No interactions to show yet
                </h1>
            </div>
        )
    }

    return (
        
        <div>
            <h1 className='text-xl font-bold mb-6'>Timeline</h1>
            {
                timeLine.map((entry,index) => (
                    <div key={index} className='flex flex-col shadow-sm space-y-3 p-5'>
                        <div className='flex items-center gap-4'>
                        <img src = {actionImages[entry.action]} className='w-5 h-5 object-contain' alt="" />

                        <p className='font-semibold text-2xl'>{entry.action} <span className='font-normal text-xl text-gray-500'>with {entry.friendName}</span> </p>
                        </div>

                        <p className='font-normal text-sm'>{entry.date}</p>
                    </div>
                ))
            }
           
        </div>
    );
};

export default Timeline;