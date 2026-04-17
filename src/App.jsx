
import { RouterProvider } from 'react-router'
import './App.css'

import { router } from './routes/Routes'
import { Suspense } from 'react'


function App() {


  return (
    <>
   

    <RouterProvider router={router}>
     
    </RouterProvider>
   
    
   </>
  )
}

export default App
