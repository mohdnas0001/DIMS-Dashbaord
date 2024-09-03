// src/pages/Home.js
import React from 'react';
import Header from '../components/Home/Header';
import Card from '../components/Home/Card';
import AcademicSemesterCards from '../components/Home/AcademicSemester';
import ScheduleSection from '../components/Home/ScheduleCard';


const Home = () => {
  const cardDetails = [
    { title: 'Your current level', number: '100', color: '#0D659F' },
    { title: 'Current semester', number: '2', color: '#502369' },
    { title: 'Current Cgpa', number: '4.55', color: '#0D659F' },
    { title: 'Outstanding courses', number: '0', color: '#502369' },
  ];

  return (
    <section className="p-2 md:p-10">
      <Header />
      <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {cardDetails.map((card, index) => (
          <Card key={index} title={card.title} number={card.number} color={card.color} />
        ))}
      </div>
      <AcademicSemesterCards />
      <ScheduleSection/>

    </section>
  );
};

export default Home;
