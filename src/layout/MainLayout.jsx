import React from 'react';
import Navbar from '../components/navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/footer/Footer';
import { TimeLineProvider } from '../context/TimeLineContext';
import { ToastContainer } from 'react-toastify';

const MainLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <TimeLineProvider>
            <Navbar></Navbar>
            <div className='grow'>

            <Outlet></Outlet>
            </div>

            
            <Footer></Footer>
            <ToastContainer></ToastContainer>
            </TimeLineProvider>
           
        </div>
    );
};

export default MainLayout;
