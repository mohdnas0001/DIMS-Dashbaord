import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Course from '../pages/Courses';
import Result from '../pages/Result';
import FacultyPage from '../pages/Faculty';
import EventNewsPage from '../pages/Event-News';
import ResourcesPage from '../pages/Resources';
import AdminHome from '../pages/AdminHome';
import ManageUsers from '../pages/AdminUsers';
import LecturerHome from '../pages/LecturerHome';
import LecturerCourse from '../pages/LecturerCourses';
import LecturerResourcesPage from '../pages/LecturerResources';
import LecturerStudent from '../pages/LecturerStudents';
import LecturerResult from 'pages/LecturerResult';

const RoleBasedRoutes = ({ role }) => {
  return (
    <Routes>
      {/* Routes for student */}
      {role === 'student' && (
        <>
          <Route path="/student/home" element={<Home />} />
          <Route path="/student/course" element={<Course />} />
          <Route path="/student/result" element={<Result />} />
          <Route path="/student/faculty" element={<FacultyPage />} />
          <Route path="/student/events-news" element={<EventNewsPage />} />
          <Route path="/student/resources" element={<ResourcesPage />} />
        </>
      )}

      {/* Routes for admin */}
      {role === 'admin' && (
        <>
          <Route path="/admin/home" element={<AdminHome />} />
          <Route path="/admin/users" element={<ManageUsers />} />
        </>
      )}

      {/* Routes for lecturer */}
      {role === 'lecturer' && (
        <>
          <Route path="/lecturer/home" element={<LecturerHome />} />
          <Route path="/lecturer/course" element={<LecturerCourse />} />
          <Route path="/lecturer/resources" element={<LecturerResourcesPage />} />
          <Route path="/lecturer/student" element={<LecturerStudent />} />
          <Route path="/lecturer/result" element={<LecturerResult/>} />
          <Route path="/lecturer/faculty" element={<FacultyPage />} />
          <Route path="/lecturer/events-news" element={<EventNewsPage />} />
        </>
      )}
    </Routes>
  );
};

export default RoleBasedRoutes;
