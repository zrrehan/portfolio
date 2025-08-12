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
import Resume from './Routes/Resume';
import Education from './Components/Resume/Education';
import Skills from './Components/Resume/Skills';
import Projects from './Components/Resume/Projects/Projects';
import AboutMe from './Components/Resume/AboutMe/AboutMe';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {index: true, element: <Home></Home>}, 
      {
        path: "/resume", 
        element: <Resume></Resume>,
        children: [
          { path: "/resume/education", element: <Education></Education>}, 
          {path: "/resume/skills", element: <Skills></Skills>},
          { path: "/resume/about-me", element: <AboutMe></AboutMe> },
        ]
      }, 
      { path: "/projects", element: <Projects></Projects> }
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
