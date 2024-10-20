import React from 'react';
import ProgressCard from 'components/common/circular-progressbar';
import PieChartCard from 'components/common/piechart-card';

const LecturerAnalysis = () => {
  const academicProgress = [
    { label: ' Semester Progress', value: 75, description: '2 of 15 semesters' },
    { label: 'Days to Exams', value: 50, description: '50 days' },
    { label: 'Year Semester', value: 85, description: '3 of 5 Semester' },
  ];

  const levelDistribution = [
    { name: 'Level 100', value: 400 },
    { name: 'Level 200', value: 300 },
    { name: 'Level 300', value: 300 },
    { name: 'Level 400', value: 200 },
    { name: 'Level 500', value: 100 },
  ];

  const genderDistribution = [
    { name: 'Male', value: 600 },
    { name: 'Female', value: 400 },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-2">
      <ProgressCard title="Calendar Progress" progressData={academicProgress} />
      
      <PieChartCard
        title="Students"
        levelDistribution={levelDistribution}
        genderDistribution={genderDistribution}
      />
    </div>
  );
};

export default LecturerAnalysis;
