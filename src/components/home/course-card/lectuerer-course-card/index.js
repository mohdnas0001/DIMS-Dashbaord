import React from 'react';

const LecturerCourseCard = ({ title, courseCount, courses }) => {
  return (
    <div className="p-6 mb-6 bg-white border-2 rounded-lg shadow-lg">
      <div className="flex items-center justify-start gap-6 mb-4">
        <h2 className="text-xl font-bold text-gray-700">{title}</h2>
        <div className="block px-3 py-1 mr-2 text-sm border border-gray-400 rounded-full txt-gray-600 lg:text-sm ">
          {courseCount} Courses
        </div>
      </div>
      <div className="mt-12 overflow-x-auto">
        <table className="min-w-full rounded-lg">
          <thead>
            <tr>
                          <th className="px-4 py-2 text-left text-gray-600">Course Title</th>
                                        <th className="px-4 py-2 text-left text-gray-600">Status</th>
              <th className="px-4 py-2 text-left text-gray-600">Course Unit</th>
                          <th className="px-4 py-2 text-left text-gray-600">Lecture Day & Date</th>
                                        <th className="px-4 py-2 text-left text-gray-600">Course Code</th>

              <th className="px-4 py-2 text-left text-gray-600">Venue</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={index} className="border-t border-gray-200">
                    <td className="px-4 py-2">{course.title}</td>
                                    <td className="px-4 py-2">{course.status}</td>
                <td className="px-4 py-2">{course.unit}</td>

                    <td className="px-4 py-2">{course.dateTime}</td>
                                    <td className="px-4 py-2">{course.code}</td>

                <td className="px-4 py-2">{course.venue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LecturerCourseCard;
