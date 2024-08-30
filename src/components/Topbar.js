import React from 'react';

const Topbar = ({ toggleSidebar }) => {
  return (
    <div className="p-4 text-white bg-[#FDF8FF] shadow-custom-topbar flex items-center justify-between">
      <h1 className="text-xl text-black">Dashboard</h1>
      <button className="text-black cursor-pointer md:hidden" onClick={toggleSidebar}>
        <img src="/images/icons/menu.svg" alt="Menu" className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Topbar;
