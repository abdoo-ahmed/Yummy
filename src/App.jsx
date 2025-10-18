import React from 'react'
import { RouterProvider } from 'react-router-dom';
import { router } from './Components/Routes/Routers';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AreaContext from './Components/Contexts/AreaContext';


const Client = new QueryClient()

const App = () => {
  return <React.Fragment>

    <AreaContext>
      <QueryClientProvider client={Client}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AreaContext>
  </React.Fragment>
}

export default App