import React, { useEffect, useRef, useState } from 'react'
import { AppSidebar, SidebarProvider, SidebarTrigger } from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {

   const contentRef = useRef(null);
  const [isFullScreen, setIsFullScreen] = useState(true);

  useEffect(() => {
    function handleResize() {
      const contentHeight = contentRef.current?.scrollHeight;
      const screenHeight = window.innerHeight;
      setIsFullScreen(contentHeight < screenHeight);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <>

    <div className="grid grid-cols-12 w-full bg-black min-h-screen">
        <div className="fixed z-50">
            <SidebarProvider>
            <AppSidebar />
            <main>
                <SidebarTrigger />
            </main>
            </SidebarProvider>
        </div>

        <div ref={contentRef} className={`col-span-12 text-white pt-10 pl-25 ${
        isFullScreen ? "h-screen" : "h-auto"}`}>
            <Outlet/>
        </div>
    </div>

  
  
  </>
}

export default Layout
