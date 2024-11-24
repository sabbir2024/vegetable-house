import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import './index.css'
import Router from './routes/Router.jsx'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NextUIProvider>
      <RouterProvider router={Router} future={{ v7_startTransition: true }} />
    </NextUIProvider>

  </StrictMode>,
)
