import React from 'react';
import Card from 'components/common/card';
import LecturerAnalysis from 'components/home/academic-semester/lecturer-analysis';
import LecturerCourseTable from 'components/common/course-table/lecturer-course-table';

const LecturerHome = () => {
  const cardDetails = [
    { title: 'Number of Students', number: '400', color: '#0D659F' },
    { title: 'Current semester', number: '2', color: '#502369' },
    { title: 'No of courses', number: '15', color: '#0D659F' },
    { title: 'No of levels', number: '5', color: '#502369' },
  ];
    
     const courses = [
    {
      status: 'Available', // Can also be 'Inactive'
      title: 'Computer Science 101',
      unit: '3',
      dayDate: 'Monday, 8:00 PM',
      code: 'CS101',
      venue: 'Room 5A',
         },
         {
      status: 'Available', // Can also be 'Inactive'
      title: 'Database 101',
      unit: '3',
      dayDate: 'Monday, 8:00 PM',
      code: 'CS101',
      venue: 'Room 5A',
         },
         {
      status: 'Available', // Can also be 'Inactive'
      title: 'Operating System 101',
      unit: '3',
      dayDate: 'Monday, 8:00 PM',
      code: 'CS101',
      venue: 'Hall 5A',
         },
         {
      status: 'Available', // Can also be 'Inactive'
      title: 'Computer Science 101',
      unit: '3',
      dayDate: 'Monday, 8:00 PM',
      code: 'CS101',
      venue: 'Hall A',
    },
   
  ];

  return (
    <section className="p-2 md:p-10">
      <Header title={"Welcome Prof. James,"} />
      <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {cardDetails.map((card, index) => (
          <Card key={index} title={card.title} number={card.number} color={card.color} />
        ))}
          </div>
          
          <LecturerAnalysis />
      <LecturerCourseTable courses={courses} />
      </section>
  );
};

const Header = ({ title }) => {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-[#0B0B0B]">{title}</h1>
    </div>
  );
};

export default LecturerHome;
