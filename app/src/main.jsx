// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import Navbar from './component/Navbar'

import Home from './component/Home';
import GroupChat from './component/GroupChat';
import Makegroup from './component/Makegroup';
import DocumentManager from './component/DocumentManager';
import DocumentsSidebar from './component/DocumentsSidebar';
import ViewNoticeboard from './component/ViewNoticeboard'
import Voice from './component/Voice';
import Video from './component/Video';
import Game from './component/Game';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />, 
  },

  {
    path: "/group",
    element: <Makegroup />, 
  },
  {
    path: "/game",
    element: <Game />, 
  },
  
  {
    path: "/chat",
    element: <GroupChat />, 
  },
  {
    path: "/manage",
    element: <DocumentManager />, 
  },

  {
    path: "/view",
    element: <DocumentsSidebar />, 
  },
  {
    path: "/viewboard",
    element: <ViewNoticeboard />, 
  },
  {
    path: "/voice",
    element: <Voice />, 
  },

  {
    path: "/video",
    element: <Video />, 
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar></Navbar>
    <RouterProvider router={router} />
  </StrictMode>,
)
