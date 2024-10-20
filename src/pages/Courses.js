// src/pages/Course.js
import React from 'react';
import Card from 'components/common/card';
import CourseTable from 'components/common/course-table';
import { courses } from 'config/config';


const Course = () =>
{
  
  
  const cardDetails = [
    { title: 'Total number of courses', number: '40', color: '#0D659F' },
    { title: 'Current semester courses', number: '8', color: '#502369' },
    { title: 'Current Cgpa', number: '4.55', color: '#0D659F' },
    { title: 'Outstanding courses', number: '0', color: '#502369' },
  ];

  return (
    <section className="p-2 md:p-10">
      <Header title={"Courses"} />
      <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {cardDetails.map((card, index) => (
          <Card key={index} title={card.title} number={card.number} color={card.color} />
        ))}
      </div>
      <CourseTable courses={courses}/>
      
    </section>
  );
};

export default Course;


const Header = ({ title }) => {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-[#0B0B0B]">{title}</h1>
    </div>
  );
};