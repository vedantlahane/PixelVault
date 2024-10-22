// src/components/competitions/CompetitionCard.jsx
import React from 'react';
import { Calendar, Clock } from 'lucide-react';

const CompetitionCard = ({ competition }) => {
  const { title, theme, deadline, status, prize } = competition;

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow p-4">
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-2">
        <strong>Theme:</strong> {theme}
      </p>
      <div className="flex items-center space-x-4 mb-2 text-sm text-gray-500">
        <div className="flex items-center space-x-1">
          <Calendar size={16} />
          <span>{status}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Clock size={16} />
          <span>Deadline: {deadline}</span>
        </div>
      </div>
      <p className="text-sm text-gray-700">
        <strong>Prize:</strong> {prize}
      </p>
    </div>
  );
};

export default CompetitionCard;
