import React from 'react'
import ReactDOM from 'react-dom/client'

// React Router DOM
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { App } from './App.jsx'

// Pages
import { Signup } from './pages/Signup/Signup.jsx';
import { MainScreen } from './pages/Mainscreen/MainScreen';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Signup />
      },
      {
        path: '/mainscreen',
        element: <MainScreen />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
