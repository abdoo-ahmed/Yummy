import React from 'react'
import { SidebarProvider, AppSidebar, SidebarTrigger } from "./Components/Sidebar/Sidebar";

const App = () => {
  return <React.Fragment>
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
      </main>
    </SidebarProvider>
  </React.Fragment>
}

export default App