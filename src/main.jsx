import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Analytics } from "@vercel/analytics/react"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AuthProvider from './admin/AuthContext.jsx'
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Analytics />
    <QueryClientProvider client={queryClient}>

      <BrowserRouter>
        <AuthProvider>


          <App />
        </AuthProvider >
      </BrowserRouter>
    </QueryClientProvider>
  </>
)