import React from 'react';
import insta from '../../assets/instagram.png';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';

const Footer = () => {
    return (
        <div className='flex flex-col items-center justify-center bg-green-900 p-10'>
            <h1 className='font-extrabold text-4xl md:text-7xl text-white'>KeenKeeper</h1>
            <p className='text-white mt-8 text-center'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            <p className='text-white mt-5'>Social links</p>
            <div className='flex justify-center items-center gap-3 mt-4'>
                <img src={insta} alt="" />
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />

            </div>
            <div className='flex flex-col md:flex-row justify-between items-center w-full'>
                <p className='text-white'>© 2026 KeenKeeper. All rights reserved.</p>
                <div className='flex flex-wrap justify-center items-center gap-4 text-sm'>
                    <p className='text-white'>Privacy Policy</p>
                    <p className='text-white'>Terms of services</p>
                    <p className='text-white'>Cookies</p>

                </div>
            </div>
        </div>
    );
};

export default Footer;