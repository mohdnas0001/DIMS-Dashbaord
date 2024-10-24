import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [selectedRole, setSelectedRole] = useState('');

  const handleLogin = () => {
    if (selectedRole) {
      onLogin(selectedRole); // Pass selected role to App component
    } else {
      alert('Please select a role to log in.');
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="p-6 bg-white rounded shadow-md w-80">
        <h2 className="mb-4 text-xl font-bold text-center">Login</h2>
        <label className="block mb-2">Select Role:</label>
        <select
          className="block w-full p-2 mb-4 border"
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
        >
          <option value="">-- Select Role --</option>
          <option value="student">Student</option>
          <option value="lecturer">Lecturer</option>
          <option value="admin">Admin</option>
        </select>
        <button
          className="w-full p-2 text-white bg-blue-500 rounded"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
