// src/components/competitions/Competitions.jsx
import React from 'react';
import CompetitionCard from './CompetitionCard';

const Competitions = () => {
  const competitions = [
    {
      id: 1,
      title: 'Digital Art Showdown',
      theme: 'Futuristic Worlds',
      deadline: 'October 31, 2024',
      status: 'Ongoing',
      prize: '1st place: $500, 2nd place: $300, 3rd place: $150'
    },
    {
      id: 2,
      title: 'Photography Masters',
      theme: 'Nature in Focus',
      deadline: 'November 15, 2024',
      status: 'Ongoing',
      prize: '1st place: $1000, 2nd place: $500'
    },
    {
      id: 3,
      title: 'Portrait Painting Challenge',
      theme: 'Emotions Through Faces',
      deadline: 'December 1, 2024',
      status: 'Upcoming',
      prize: '1st place: $750, 2nd place: $400'
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Art Competitions</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {competitions.map((comp) => (
          <CompetitionCard key={comp.id} competition={comp} />
        ))}
      </div>
    </div>
  );
};

export default Competitions;
