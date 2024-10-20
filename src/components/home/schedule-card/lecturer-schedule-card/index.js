import LecturerCourseCard from 'components/home/course-card/lectuerer-course-card';
import React from 'react';

const LecturerScheduleSection = () => {
  const courses = [
    {
      title: 'Introduction to Computer Science',
      status: 'available',
      unit : "2",
      code: 'CS101',
      dateTime: 'Monday, 8:00pm',
      venue: 'Room 101',
    },
    {
      title: 'Introduction to Computer Science',
      status: 'available',
      unit : "2",
      code: 'CS101',
      dateTime: 'Monday, 8:00pm',
      venue: 'Room 101',
    },{
      title: 'Introduction to Computer Science',
      status: 'available',
      unit : "2",
      code: 'CS101',
      dateTime: 'Monday, 8:00pm',
      venue: 'Room 101',
    },
    {
      title: 'Introduction to Computer Science',
      status: 'available',
      unit : "2",
      code: 'CS101',
      dateTime: 'Monday, 8:00pm',
      venue: 'Room 101',
    },
    
  ];

  return (
    <div className="flex flex-col gap-6 mt-10 ">
      <LecturerCourseCard
        title="Class Schedule(Weekly)"
        courseCount={courses.length}
        courses={courses}
      />
     
    </div>
  );
};

export default LecturerScheduleSection;


