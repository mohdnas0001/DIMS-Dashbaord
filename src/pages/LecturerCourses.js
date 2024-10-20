import React, { useState } from 'react';
import { lecturerCourses, studentData } from 'config/config';
import LecturerStudentTable from 'components/common/course-table/lecturer-students-table';
import LecturerCard from 'components/common/card/lecturre-course-card';
import Header from 'components/common/header';
import CourseTable from 'components/common/course-table';
import CourseFilter from 'components/common/course-filter';
import LecturerFullCourseTable from 'components/common/course-table/lecturer';

const LecturerCourse = () => {
  const [selectedLevel, setSelectedLevel] = useState(null); // Tracks the clicked level
  const [studentsVisible, setStudentsVisible] = useState(false); // Tracks if the student list is visible

  const levels = [
    { level: 'Level 100', course: 1, color: '#0D659F' },
    { level: 'Level 200', course: 1, color: '#F8FCFF', textColor: '#0D659F' },
    { level: 'Level 300', course: 3, color: '#0D659F' },
    { level: 'Level 400', course: 2, color: '#F8FCFF', textColor: '#0D659F' },
    { level: 'Level 500', course: 3, color: '#0D659F' },
  ];

  // Function to handle card click
  const handleCardClick = (level) => {
    setSelectedLevel(level); // Set the selected level
    setStudentsVisible(true); // Toggle the student list view
  };

  // Function to handle "Back" button click
  const handleBackClick = () => {
    setStudentsVisible(false); // Hide student list and show cards again
    setSelectedLevel(null); // Reset selected level
  };

  return (
    <section className="p-2 md:p-10">
      {studentsVisible ? (
        // Display student list when a card is clicked
        <div>
          <button
            className="flex items-center p-2 mb-4 rounded-lg hover:bg-gray-100"
            onClick={handleBackClick}
          >
            <img src="/images/icons/arrow-left.svg" alt="Back" className="w-6 h-6 mr-2" /> {/* Use your back image path */}
                  </button>
          <Header title={"Course"} />
          <CourseFilter title={selectedLevel}/>

          <LecturerFullCourseTable courses={lecturerCourses[selectedLevel]} level ={selectedLevel}/>

        </div>
      ) : (
        // Display the cards if the student list is not visible
        <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {levels.map((item, index) => (
            <LecturerCard
              key={index}
              level={item.level}
              students={item.students}
              color={item.color}
              textColor={item.textColor}
              onClick={() => handleCardClick(item.level)} // Attach click handler
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default LecturerCourse;
