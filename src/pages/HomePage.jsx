import React from 'react';
import { FaPlus } from 'react-icons/fa';

const HomePage = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center mt-20'>
                <h2 className='font-bold text-4xl'>Friends to keep close in your life</h2>
                <p className='text-center font-normal text-xl text-gray-400 mt-4'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
relationships that matter most.</p>
               <button className='btn bg-green-700 text-white mt-4 border rounded-md hover:bg-green-500'><FaPlus/>Add a friend</button>
            </div>
            
        </div>
    );
};

export default HomePage;