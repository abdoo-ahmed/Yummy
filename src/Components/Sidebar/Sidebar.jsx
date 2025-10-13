import _default from "eslint-plugin-react-refresh";
import React, { useState, createContext, useContext } from "react";
const SidebarContext = createContext();
import { FaBars, FaTimes, FaGlobe, FaShareAlt, FaFacebook, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "20rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";

export function SidebarProvider({ children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  React.useEffect(() => {
    const handleKey = (e) => {
      if (e.key.toLowerCase() === SIDEBAR_KEYBOARD_SHORTCUT) {
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      <div
        className="sidebar-provider flex"
        style={{
          "--sidebar-width": SIDEBAR_WIDTH,
          "--sidebar-width-mobile": SIDEBAR_WIDTH_MOBILE,
          
        }}
      >
        {children}
      </div>
    </SidebarContext.Provider>
  );
}

function useSidebar() {
  return useContext(SidebarContext);
}

export function Sidebar() {
  const { isOpen } = useSidebar();

  return (
    <aside
      className="sidebar h-screen flex flex-col justify-between text-white bg-[#0D0D0D]"
      style={{
        width: isOpen ? "var(--sidebar-width)" : "0",
        transition: "width 0.7s ease",
        overflow: "hidden",
        padding: isOpen ? "1.5rem" : "0",
      }}
    >
      <ul className={isOpen ? _default : "animate__animated animate__bounceOutLeft"}>
        <li style={{ animationDelay: isOpen?"0.2s":_default }} className={isOpen? 'animate__animated animate__fadeInUp mb-3' : _default }> <NavLink to={'search'}>Search</NavLink> </li>
        <li style={{ animationDelay: isOpen?"0.3s":_default }} className={isOpen? 'animate__animated animate__fadeInUp mb-3' : _default }> <NavLink to={'categories'}>Categories</NavLink> </li>
        <li style={{ animationDelay: isOpen?"0.4s":_default }} className={isOpen? 'animate__animated animate__fadeInUp mb-3' : _default }>  <NavLink to={'area'}>Area</NavLink> </li>
        <li style={{ animationDelay: isOpen?"0.5s":_default }} className={isOpen? 'animate__animated animate__fadeInUp mb-3' : _default }> <NavLink to={'ingredients'}>Ingredients</NavLink> </li>
        <li style={{ animationDelay: isOpen?"0.6s":_default }} className={isOpen? 'animate__animated animate__fadeInUp mb-3' : _default }> <NavLink to={'contactUs'}>Contact Us</NavLink> </li>
      </ul>

        <div className={isOpen?"bottom-5 left-10 text-sm text-white space-y-2 animate__animated animate__backInLeft" : "bottom-5 left-10 text-sm text-white space-y-2 animate__animated animate__bounceOutLeft"}>
          <div className="flex items-center space-x-3 text-lg">
            <FaFacebook className="cursor-pointer" />
            <FaTwitter className="cursor-pointer" />
            <FaGlobe className="cursor-pointer" />
          </div>
          <p>Copyright © 2019 All Rights Reserved.</p>
        </div>
    </aside>
  );
}


export function SidebarTrigger() {
  
  const { isOpen, setIsOpen } = useSidebar();

  return (
      <div className="absolute z-50 h-screen w-16 animate__animated animate__fadeInRight bg-white text-black flex flex-col justify-between items-center py-6 shadow-md">
        <div className="flex flex-col items-center">
          <img
            src="https://routeegy.github.io/YummyExam/imgs/logo.png"
            alt="emoji"
            className="w-[80%]"
          />
        </div>

        <div
          className="text-3xl cursor-pointer hover:scale-110 transition-transform duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <div className="flex flex-col items-center space-y-4 text-xl">
          <FaGlobe className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>
    
  );
}

export function AppSidebar() {
  return <Sidebar />;
}
