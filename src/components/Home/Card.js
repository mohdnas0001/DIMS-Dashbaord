// src/components/Home/Card.js
import React from 'react';

const Card = ({ title, number, color }) => {
  return (
    <div className={`flex flex-col justify-center items-center p-6 rounded-lg`} style={{ backgroundColor: color }}>
      <h2 className="mb-2 text-base font-semibold text-white">{title}</h2>
      <p className="text-3xl text-4xl font-bold text-white">{number}</p>
    </div>
  );
};

export default Card;
