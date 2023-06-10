import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthOrApp from './pages/AuthOrApp';

import AuthProvider from './context/auth';
import CampaignSelect from './pages/CampaignSelect';
import Characters from './pages/Characters';

const router = createBrowserRouter([
  {
    path: '/campaigns',
    element: <CampaignSelect/>,
  },
  {
    path: '/',
    element: <AuthOrApp />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/characters/campaign/:campaign_id',
    element: <Characters />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
