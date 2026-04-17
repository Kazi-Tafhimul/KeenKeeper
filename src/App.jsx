
import { RouterProvider } from 'react-router'
import './App.css'

import { router } from './routes/Routes'
import { Suspense } from 'react'


function App() {


  return (
    <>
   

    <RouterProvider router={router}
    fallbackElement={
                <div className='flex justify-center items-center min-h-screen'>
                    <span className="loading loading-dots loading-xl"></span>
                </div>
            } >
      
    </RouterProvider>
   
    
   </>
  )
}

export default App
