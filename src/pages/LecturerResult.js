import React, { useState } from 'react';
import { lecturerResults } from 'config/config';
import LecturerCard from 'components/common/card/lecturer-course-card';
import Header from 'components/common/header';
import CourseFilter from 'components/common/course-filter';
import LecturerResultTable from 'components/common/result-table/lecturer';
import ResultModal from 'components/result/result-modal';

const LecturerResult = () => {
  const [selectedLevel, setSelectedLevel] = useState(null); // Tracks the clicked level
  const [studentsVisible, setStudentsVisible] = useState(false); // Tracks if the student list is visible
  const [isModalOpen, setIsModalOpen] = useState(false); // Controls modal visibility

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

  // Function to handle result addition
  const handleAddResult = (result) => {
    console.log('New result added:', result); // You can replace this with actual form submission logic
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
            <img src="/images/icons/arrow-left.svg" alt="Back" className="w-6 h-6 mr-2" />
          </button>

          <div className='flex items-center justify-between w-full'>
            <Header title={"Student"} />
            <button
              className='rounded-md px-4 py-1 text-white bg-[#00659F]'
              onClick={() => setIsModalOpen(true)} // Open the modal on button click
            >
              Add result
            </button>
          </div>

          <CourseFilter title={selectedLevel} />
          <LecturerResultTable courses={lecturerResults[selectedLevel]} level={selectedLevel} />

          {isModalOpen && (
            <ResultModal
              onClose={() => setIsModalOpen(false)} // Close the modal
              onSubmit={handleAddResult} // Handle form submission
            />
          )}
        </div>
      ) : (
        // Display the cards if the student list is not visible
        <div className='flex flex-col w-full '>
          <h1 className='text-base font-bold md:text-3xl'>Result</h1>
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
        </div>
      )}
    </section>
  );
};

export default LecturerResult;
