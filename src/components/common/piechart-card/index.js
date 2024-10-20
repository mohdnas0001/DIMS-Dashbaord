import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const PieChartCard = ({ title, levelDistribution, genderDistribution }) => {
  const COLORS = ['#6666B3', '#000080','#CCCCE6' , '#F4EBFF'];
  

  return (
    <div className="bg-[#FDF8FF] shadow-lg rounded-lg p-6 mb-6">
      <h2 className="mb-4 text-xl font-bold text-gray-700">{title}</h2>
      <div className="flex justify-around">
        {/* Level Distribution Pie Chart */}
        <div className="w-1/2">
          <h3 className="mb-2 font-medium text-center text-gray-600">Level Distribution</h3>
          <PieChart width={300} height={300}>
            <Pie
              data={levelDistribution}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {levelDistribution.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>

        {/* Gender Distribution Pie Chart */}
        <div className="w-1/2">
          <h3 className="mb-2 font-medium text-center text-gray-600">Gender Distribution</h3>
          <PieChart width={250} height={250}>
            <Pie
              data={genderDistribution}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {genderDistribution.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default PieChartCard;
