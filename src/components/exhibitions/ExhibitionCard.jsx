// src/components/exhibitions/ExhibitionCard.jsx
import React from 'react';
import { ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const ExhibitionCard = ({ exhibition }) => {
  const { title, description, image, startDate, endDate, link } = exhibition;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative aspect-[4/3]">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="flex items-center justify-center bg-gray-200 w-full h-full">
            <ImageIcon size={32} className="text-gray-400" />
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-2">{description}</p>
        <p className="text-sm text-gray-500 mb-4">
          {startDate} - {endDate}
        </p>
        <Link to={link} className="text-primary-600 hover:text-primary-700 font-semibold text-sm">
          Explore Exhibition
        </Link>
      </div>
    </div>
  );
};

export default ExhibitionCard;
