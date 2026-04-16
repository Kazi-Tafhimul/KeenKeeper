import React from 'react';
import { FaArchive } from 'react-icons/fa';
import { HiOutlineBellSnooze } from 'react-icons/hi2';
import { MdDelete } from 'react-icons/md';
import { useLoaderData } from 'react-router';
import FriendsDetailsSummary from './FriendsDetailsSummary';
import FriendsQuickCheckIN from './FriendsQuickCheckIN';
import { useTimeline } from '../../context/TimeLineContext';

const FriendsDetail = () => {
    const friend = useLoaderData();
     const statusColor = {
        "on-track":"badge-success",
        "overdue":"badge-error",
        "almost-due":"badge-warning"
    }
    const {addTimeLine} = useTimeline();
    const statsData = [
        {title:"Days Since Contact", value:friend.days_since_contact},
        {title:"Goal (Days)", value:friend.goal},
        {title:"Next Due", value: friend.next_due_date}

    ]
    const handleAction = (action) =>{
        addTimeLine({
            friendName:friend.name,
            action:action,
            date: new Date().toLocaleString()
        });


    }

    return (
        
       <div className='flex justify-center items-center mx-5 my-20'>
         <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            <div className='flex flex-col gap-2'>
                <div className='shadow-sm p-4 flex-col justify-center items-center text-center space-y-3'>
           <img src={friend.picture} className='h-20 w-20 rounded-full mx-auto' alt="" />
           <h1 className='font-normal text-xl'>{friend.name}</h1>
          
          <h1 className='font-light text-gray-400'>{friend.days_since_contact}d ago</h1>
         <div className='flex flex-wrap gap-2 justify-center'>

           {
            friend.tags.map((tag,index) => (
                
                <span key={index} className = "badge badge-soft badge-success">
                    {tag}

                </span>
            ))
           }
         </div>
         <span className={`badge  ${statusColor[friend.status]} rounded-full text-white`}>
            {friend.status}

         </span>
         <p className='italic text-gray-500 text-sm'>
            {friend.bio}
         </p>
         <h1 className='text-gray-500 text-sm'>
            {friend.email}
         </h1>



            
        </div>
        <button className='btn shadow-sm flex items-center justify-center text-xl font-semibold h-fit p-4'>
            <HiOutlineBellSnooze/> Snooze 2 weeks
        </button>
        <button className='btn shadow-sm flex items-center justify-center text-xl font-semibold h-fit p-4'>
            <FaArchive/>Archieve
        </button>
        <button className='text-red-500 btn shadow-sm flex items-center justify-center text-xl font-semibold h-fit p-4'>
            <MdDelete/>Delete
        </button>

            </div>
            <div className='flex flex-col space-y-2'>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-2 h-fit'>
                {
                    statsData.map((stats,index) => (
                        <FriendsDetailsSummary
                        key={index}
                        title={stats.title}
                        value={stats.value}
                        ></FriendsDetailsSummary>

                    ))
                }
            </div>
             <div className='flex flex-col shadow-sm p-10 space-y-3'>
                <div className='flex justify-between'>
                    <h1 className='text-xl font-semibold'>Relationship Goal</h1>
                    <button className='btn'>Edit</button>
                </div>
                <h1 className='font-normal'>Connect every <span className='font-bold text-sm'>30 days</span></h1>
            </div>
            <FriendsQuickCheckIN handleAction = {handleAction}></FriendsQuickCheckIN>
            </div>
            
            
        </div>
       </div>
    );
};

export default FriendsDetail;