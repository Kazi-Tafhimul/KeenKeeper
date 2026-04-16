import React from 'react';
import { useTimeline } from '../context/useTimeline';

const Timeline = () => {
    const {timeLine} = useTimeline();
    if(timeLine.length === 0){
        return (
            <div className='font-extrabold text-3xl text-center flex justify-center items-center my-16'>
                No interaction yet
            </div>
        )
    }

    return (
        
        <div>
            <h1 className='text-xl font-bold'>Timeline</h1>
            {
                timeLine.map((entry,index) => (
                    <div key={index}>
                        <p>{entry.action} with {entry.friendName}</p>
                        <p>{entry.date}</p>
                    </div>
                ))
            }
           
        </div>
    );
};

export default Timeline;