import React, { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
//import { useLoaderData } from 'react-router';
import SummaryCard from '../components/summarycard/SummaryCard';
import FriendsCard from '../components/friends/FriendsCard';
import { PacmanLoader } from 'react-spinners';


const HomePage = () => {
   const [friends, setFriends] = useState([]);
   const [loading, setLoading] = useState(true);
   useEffect(() => {
    fetch('/friends.json')
    .then((res) => res.json())
    .then((data) =>{
        setFriends(data);
        setLoading(false);
    })
   },[]);


    
    const totalFriends = friends.length;
    const onTrack = friends.filter(f => f.status === "on-track").length;
    const needAttention = friends.filter(f => f.status === "overdue").length;
    const interactionThisMonth = friends.filter(f => f.status === "almost-due").length;
    const statsData = [
        {title:"Total Friends", value: totalFriends},
        {title: "On Track", value: onTrack},
        {title:"Need Attention", value:needAttention},
        {title:"Almost Due", value:interactionThisMonth}
    ]
    

    return (
        <div>
            <div className='flex flex-col justify-center items-center mt-20'>
                <h2 className='font-bold text-4xl'>Friends to keep close in your life</h2>
                <p className='text-center font-normal text-xl text-gray-400 mt-4'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
relationships that matter most.</p>
               <button className='btn bg-green-700 text-white mt-4 border rounded-md hover:bg-green-500'><FaPlus/>Add a friend</button>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-2 mt-8 mx-6'>
                {
                    statsData.map((stat,index) => (
                        <SummaryCard 
                        key={index}
                        title={stat.title}
                        value={stat.value}></SummaryCard>
                    ))
                }
            </div>
            {
                loading ? (
                    <div className='flex justify-center items-center py-20'>

                        <PacmanLoader/>
                    </div>
                ):(
                <>
                
                <div>
                <h1 className='text-2xl font-bold mt-20 p-8'>Your Friends</h1>
            </div>
             <div className='grid grid-cols-2 md:grid-cols-4 gap-2 mt-8 mx-6 p-10'>
                
                {
                    friends.map((friend,index) => (
                        <FriendsCard
                        key={index}
                        friend = {friend}></FriendsCard>
                    ))
                }
            </div>
            </>
                )
            }
            


           
            
        </div>
    );
};

export default HomePage;