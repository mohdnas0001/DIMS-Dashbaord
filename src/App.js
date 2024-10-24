import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Login from 'components/login';
import RoleBasedRoutes from 'routes';


const App = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [role, setRole] = useState(null); // No role initially, user must log in
  const navigate = useNavigate(); // React Router's useNavigate hook

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const handleLogin = (userRole) => {
    setRole(userRole); // Set the selected role after login

    // Navigate to the default route based on role
    if (userRole === 'student') {
      navigate('/student/home');
    } else if (userRole === 'lecturer') {
      navigate('/lecturer/home');
    } else if (userRole === 'admin') {
      navigate('/admin/home');
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {role ? (
        <>
          {/* Sidebar */}
          <Sidebar
            isMinimized={false}
            isSidebarVisible={isSidebarVisible}
            toggleSidebar={toggleSidebar}
            role={role} // Passing the role prop to Sidebar
          />

          {/* Main Content Area */}
          <div className="flex flex-col flex-1">
            {/* Topbar */}
            <Topbar toggleSidebar={toggleSidebar} />

            {/* Scrollable content */}
            <div className="flex-1 p-6 overflow-y-auto bg-white">
              <RoleBasedRoutes role={role} /> {/* Dynamic role-based routes */}
            </div>
          </div>
        </>
      ) : (
        // If no role selected (user not logged in), show login page
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
