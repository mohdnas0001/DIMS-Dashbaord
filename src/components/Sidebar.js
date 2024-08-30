import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { tabs } from '../config/config';

const Sidebar = ({ isMinimized, isSidebarVisible, toggleSidebar }) => {
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(isMinimized);
  const location = useLocation();

  const handleMinimize = () => {
    setIsSidebarMinimized(true);
  };

  const handleExpand = () => {
    setIsSidebarMinimized(false);
  };

  return (
    <>
      {isSidebarVisible && (
        <div
          className="fixed inset-0 z-40 bg-black opacity-50 backdrop-filter backdrop-blur-md md:hidden"
          onClick={toggleSidebar}
        />
      )}
      <div
        className={`h-screen bg-[#502369] text-white ${isSidebarMinimized ? 'w-20' : 'w-64'} transition-width duration-200 flex flex-col items-center ${isSidebarVisible ? 'fixed z-50' : 'hidden'} md:relative md:block`}
      >
        <div className="flex items-center justify-between w-full p-4">
          <img
            src={isSidebarMinimized ? "/images/logo/SmallLogo.svg" : "/images/logo/Logo.svg"}
            alt="Logo"
            className={isSidebarMinimized ? "w-8 h-8 cursor-pointer" : "w-32 h-12 cursor-pointer"}
            onClick={handleExpand}
          />
          {!isSidebarMinimized && (
            <button onClick={handleMinimize} className="p-2">
              <img src="/images/Logo/MinimizeBtn.svg" alt="Minimize" className="w-8 h-8" />
            </button>
          )}
        </div>
        <ul className="flex flex-col items-center w-full p-4 mt-4">
          {tabs.map((tab, index) => {
            const isActive = location.pathname === tab.path;
            return (
              <li key={index} className={`w-full py-2 text-center rounded-md ${isActive ? 'bg-[#DFC7EC]' : ''}`}>
                <Link to={tab.path} className={`flex items-center ${isSidebarMinimized ? 'justify-center' : 'justify-start px-6'} ${isActive ? 'text-black' : 'text-white'}`}>
                  <img src={isActive ? tab.activeIcon : tab.icon} alt={tab.name} className="w-8 h-8 bg-inherit" />
                  {!isSidebarMinimized && <span className="ml-2">{tab.name}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
