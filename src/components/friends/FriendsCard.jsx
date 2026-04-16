import React from 'react';
import { Link } from 'react-router';

const FriendsCard = ({friend}) => {
    const statusColor = {
        "on-track":"badge-success",
        "overdue":"badge-error",
        "almost-due":"badge-warning"
    }

    return (
        <Link to={`/friendsdetails/${friend.id}`}>
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


            
        </div>
        </Link>
        
    );
};

export default FriendsCard;