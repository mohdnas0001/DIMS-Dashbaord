import React from 'react';

const LecturerCard = ({ level, students, color, textColor = 'white', onClick }) => {
  return (
    <div
      className="flex flex-col items-center justify-center p-6 transition-transform transform border-2 border-gray-100 rounded-lg cursor-pointer hover:scale-105"
      style={{ backgroundColor: color }}
      onClick={onClick} // Attach the click handler
    >
      <h2 className="mb-2 text-sm font-semibold md:text-xl" style={{ color: textColor }}>
        {level}
      </h2>
      <p className="text-xl font-bold md:text-4xl" style={{ color: textColor }}>
        {students} <span className="text-base md:text-3xl">Students</span>
      </p>
    </div>
  );
};

export default LecturerCard;
