import React, { useState } from 'react';

const CourseFilter = ({title}) => {
  const [selectedSemester, setSelectedSemester] = useState('First Semester');
  const semesters = ['First Semester', 'Second Semester', 'Third Semester'];

  // Handle semester selection
  const handleSemesterChange = (e) => {
    setSelectedSemester(e.target.value);
  };

  return (
    <div className="flex flex-col justify-between p-4 my-8 rounded-lg bg-[#FDF8FF] md:flex-row">
     <div className="flex items-center">
        <h1 className="text-xl font-semibold text-[#0B0B0B]">{title} Courses</h1>
      </div>
          
          
          
          {/* Dropdown for selecting semester */}
      <div className="flex items-center mb-4 md:mb-0 ">
        <label className="mr-2 text-base font-semibold text-black">Semester:</label>
        <select
          className="px-8 py-0.5 border border-gray-300 rounded-md text-sm"
          value={selectedSemester}
          onChange={handleSemesterChange}
        >
          {semesters.map((semester, index) => (
            <option key={index} value={semester}>
              {semester}
            </option>
          ))}
        </select>
      </div>

      
    </div>
  );
};

export default CourseFilter;
