import React from 'react';

const LecturerResultTable = ({ courses , level, onEdit }) => {
  return (
    <div className="p-6 my-8 bg-white border rounded-lg">
      <div className="flex items-center gap-4 my-4">
        <h1 className='text-lg font-medium text-black'>All </h1>
        <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-[#6941C6] bg-[#F9F5FF] rounded-full">
           {courses.length} courses
        </span>
      </div>
      
      <table className="items-center justify-center w-full border-collapse table-auto">
        <thead>
          <tr className="text-sm text-left text-gray-600 bg-gray-100">
            <th className="p-2 border-b">Student Info</th>
            <th className="p-2 border-b">Matric Number</th>
            <th className="p-2 border-b">Cgpa</th>
            <th className="p-2 border-b">Actions</th>
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
              <td className="p-2 border-b">
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-gray-200`}>
                  {course.matricNumber}
                </span>
              </td>
              <td className="p-2 border-b">{course.cgpa}</td>
              <td className="p-2 border-b">
                <button 
                  className="px-3 py-1 text-white bg-blue-500 rounded hover:bg-blue-600"
                  onClick={() => onEdit(course)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LecturerResultTable;
