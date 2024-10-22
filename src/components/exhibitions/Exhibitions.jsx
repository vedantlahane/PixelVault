// src/components/exhibitions/Exhibitions.jsx
import React from 'react';
import ExhibitionCard from './ExhibitionCard';

const Exhibitions = () => {
  const exhibitions = [
    {
      id: 1,
      title: 'Abstract Art Collection',
      description: 'A journey through modern abstract paintings from contemporary artists around the world.',
      image: '/images/exhibition1.jpg',
      startDate: 'October 1, 2024',
      endDate: 'October 31, 2024',
      link: '/exhibition/1',
    },
    {
      id: 2,
      title: 'Nature Photography',
      description: 'A breathtaking collection of landscape and wildlife photography by top photographers.',
      image: '/images/exhibition2.jpg',
      startDate: 'November 5, 2024',
      endDate: 'December 5, 2024',
      link: '/exhibition/2',
    },
    {
      id: 3,
      title: 'Digital Dreamscapes',
      description: 'Exploring the intersection of digital art and surrealism with cutting-edge techniques.',
      image: '/images/exhibition3.jpg',
      startDate: 'December 10, 2024',
      endDate: 'January 10, 2025',
      link: '/exhibition/3',
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Virtual Exhibitions</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {exhibitions.map((exhibition) => (
          <ExhibitionCard key={exhibition.id} exhibition={exhibition} />
        ))}
      </div>
    </div>
  );
};

export default Exhibitions;
