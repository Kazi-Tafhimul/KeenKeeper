import React from 'react';

import MainLayout from '../layout/MainLayout';
import HomePage from '../pages/HomePage';
import Stats from '../pages/Stats';
import Timeline from '../pages/Timeline';
import ErrorPage from '../pages/ErrorPage';
import { createBrowserRouter } from 'react-router';
import FriendsDetail from '../components/friends/FriendsDetail';
export const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                index:true,
                element:<HomePage></HomePage>,
                loader: () => fetch('/friends.json')
              
    },

            
            {
                path:"/stats",
                element:<Stats></Stats>
            },
            {
                path:"/timeline",
                element:<Timeline></Timeline>
            },
            {

                path:"/friendsdetails/:id",
                element:<FriendsDetail></FriendsDetail>,
                loader: async ({params}) => {
                    const res = await fetch('/friends.json');
                    const friends = await res.json();
                    const friend = friends.find(f => f.id === parseInt(params.id));
                    return friend;
            }}
                
        ],
        errorElement:<ErrorPage></ErrorPage>
        
    }
])




