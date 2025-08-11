import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Layout from './Layout';
import Home from './Routes/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {index: true, element: <Home></Home>}
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
