import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Layout from './Layout';
import Home from './Routes/Home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import LoadData from './LoadData';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {index: true, element: <Home></Home>}
    ]
  },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <LoadData>
        <RouterProvider router={router} />
      </LoadData>
    </QueryClientProvider>
  </StrictMode>
)
