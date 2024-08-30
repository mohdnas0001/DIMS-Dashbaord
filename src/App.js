import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';

const App = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <Router>
      <div className="flex">
        <Sidebar isMinimized={false} isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
        <div className="flex-1">
          <Topbar toggleSidebar={toggleSidebar} />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add more routes here */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
