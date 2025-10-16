import React from 'react'
import { AppSidebar, SidebarProvider, SidebarTrigger } from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return <>

    <div className="grid grid-cols-12 w-full bg-black">
        <div className="fixed z-50">
            <SidebarProvider>
            <AppSidebar />
            <main>
                <SidebarTrigger />
            </main>
            </SidebarProvider>
        </div>

        <div className="col-span-12 text-white pt-10 pl-30">
            <Outlet/>
        </div>
    </div>

  
  
  </>
}

export default Layout