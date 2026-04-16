import React from 'react';

const FriendsDetailsSummary = ({title,value}) => {
    return (
          <div className='shadow-sm p-9 flex-col justify-center items-center text-center'>
            <h2 className='mb-2 text-2xl font-bold'>{value}</h2>
            <p className='mt-2 text-gray-500'>{title}</p>


            
        </div>
    );
};

export default FriendsDetailsSummary;