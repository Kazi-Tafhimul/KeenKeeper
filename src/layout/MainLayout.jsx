import React from 'react';
import Navbar from '../components/navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/footer/Footer';
import { TimeLineProvider } from '../context/TimeLineContext';

const MainLayout = () => {
    return (
        <div>
            <TimeLineProvider>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            </TimeLineProvider>
           
        </div>
    );
};

export default MainLayout;
