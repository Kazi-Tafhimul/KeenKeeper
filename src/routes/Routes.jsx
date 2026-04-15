import React from 'react';

import MainLayout from '../layout/MainLayout';
import HomePage from '../pages/HomePage';
import Stats from '../pages/Stats';
import Timeline from '../pages/Timeline';
import ErrorPage from '../pages/ErrorPage';
import { createBrowserRouter } from 'react-router';
export const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                index:true,
                element:<HomePage></HomePage>
            },
            {
                path:"/stats",
                element:<Stats></Stats>
            },
            {
                path:"/timeline",
                element:<Timeline></Timeline>
            }
        ],
        errorElement:<ErrorPage></ErrorPage>
        
    }
])




