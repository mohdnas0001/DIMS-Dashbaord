import React from 'react';

const LecturerStudentTable = ({ courses }) => {
  return (
    <div className="p-6 my-8 bg-white border rounded-lg">
      <div className="flex items-center gap-4 my-4">
        <h1 className='text-lg font-medium text-black'>400 Level Second Semester Courses</h1>
        <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-[#6941C6] bg-[#F9F5FF] rounded-full">
          {courses.length} courses
        </span>
      </div>
      
      <table className="items-center justify-center w-full border-collapse table-auto">
        <thead>
          <tr className="text-sm text-left text-gray-600 bg-gray-100">
            <th className="p-2 border-b">Student Info</th>
            <th className="p-2 border-b">Metric Number</th>
            <th className="p-2 border-b">Phone Number</th>
            <th className="p-2 border-b">Gender</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index} className="text-sm">
              <td className="flex items-center p-2 space-x-4 border-b">
                <img 
                  src={course.profilePicture} 
                  alt={course.student} 
                  className="object-cover w-12 h-12 rounded-full"
                />
                <span>{course.student}</span>
              </td>
              <td className="p-2 border-b">{course.metricNumber}</td>
              <td className="p-2 border-b">{course.phoneNumber}</td>
              <td className="p-2 border-b">
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-600`}>
                  <span className={`inline-block w-2 h-2 mr-1 rounded-full bg-gray-500`} />
                  {course.gender} {/* Ensure the property name matches your data structure */}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LecturerStudentTable;
