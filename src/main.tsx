import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './pages/Home.tsx';
import MainLayout from './components/Layout/MainLayout.tsx';
import Login from './pages/Login.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children:[
      {
        index:true,
        Component:Home
      },
      {
        path:"/login",
        Component:Login
      }
    ]
  },
]);

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}/>
    </QueryClientProvider>
  </StrictMode>,
)
