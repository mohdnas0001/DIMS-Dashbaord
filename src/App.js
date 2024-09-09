import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Course from './pages/Courses';
import Result from './pages/Result';

const App = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <Router>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar
          isMinimized={false}
          isSidebarVisible={isSidebarVisible}
          toggleSidebar={toggleSidebar}
        />

        {/* Main Content Area */}
        <div className="flex flex-col flex-1">
          {/* Topbar */}
          <Topbar toggleSidebar={toggleSidebar} />

          {/* Scrollable content */}
          <div className="flex-1 p-6 overflow-y-auto bg-white">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/course" element={<Course />} />
              <Route path="/result" element={<Result />} />

              {/* Add more routes here */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
