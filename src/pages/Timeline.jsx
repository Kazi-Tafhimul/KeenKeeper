import React, { useState } from 'react';
import { useTimeline } from '../context/useTimeline';
import callImg from '../assets/call.png';
import textImg from '../assets/text.png';
import videoImg from '../assets/video.png';


const Timeline = () => {
    const {timeLine} = useTimeline();
    const [filter, setFilter] = useState("All");
    const actionImages = {
        "Call":callImg,
        "Text":textImg,
        "Video":videoImg
    }
    const handleFilter = (type) =>{
        setFilter(type);

    }
    const filteredTimeline = filter === "All"? timeLine 
    : timeLine.filter(entry => entry.action === filter);
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
            <h1 className='text-xl font-bold mb-4 p-4'>Timeline</h1>
            <details className="dropdown ">
                <summary className="btn m-1">Filter Timeline : {filter}</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a onClick={()=> handleFilter("All")}>All</a></li>
                    <li><a onClick={() => handleFilter("Call")}>Call</a></li>
                    <li><a onClick={()=> handleFilter("Text")}>Text</a></li>
                    <li><a onClick={() => handleFilter("Video")}>Video</a></li>
                </ul>
             </details>
            {
                filteredTimeline.length>0?(

                    filteredTimeline.map((entry,index) => (
                        <div key={index} className='flex flex-col shadow-sm space-y-3 p-5'>
                            <div className='flex items-center gap-4'>
                            <img src = {actionImages[entry.action]} className='w-5 h-5 object-contain' alt="" />
    
                            <p className='font-semibold text-2xl'>{entry.action} <span className='font-normal text-xl text-gray-500'>with {entry.friendName}</span> </p>
                            </div>
    
                            <p className='font-normal text-sm'>{entry.date}</p>
                        </div>
                    ))
                ) : (
                    <div className='flex justify-center items-center min-h-screen'>
                <h1 className='text-3xl font-bold'>
                    No interactions to show yet
                </h1>
            </div>

                )
            }
           
        </div>
    );
};

export default Timeline;