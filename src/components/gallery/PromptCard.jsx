// src/components/PromptCard.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Copy, MessageCircle, Share2, Heart } from 'lucide-react';

const PromptCard = ({
  id,
  image = "/api/placeholder/400/300",
  title = "Cyberpunk Butterfly Garden",
  description = "A stunning artwork that merges nature and technology in a futuristic landscape.",
  category = "Photography",
  author = "PixelArtist",
  likes = 42,
  comments = 8
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Link to={`/artwork/${id}`}>
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs">
            {category}
          </div>
        </div>
      </Link>

      <div className="p-4">
        <Link to={`/artwork/${id}`}>
          <h3 className="font-bold text-lg mb-2 hover:text-primary-600">{title}</h3>
        </Link>
        
        <p className="text-sm text-gray-700">{description}</p>
        <p className="text-sm text-gray-600 mt-2">by {author}</p>
      </div>

      <div className="px-4 py-3 border-t flex justify-between items-center">
        <div className="flex gap-4">
          <button onClick={handleLike} className={`flex items-center gap-1 ${isLiked ? 'text-red-500' : 'text-gray-600 hover:text-red-500'}`}>
            <Heart size={18} fill={isLiked ? 'currentColor' : 'none'} />
            <span>{isLiked ? likes + 1 : likes}</span>
          </button>
          <button className="flex items-center gap-1 text-gray-600 hover:text-blue-500">
            <MessageCircle size={18} />
            <span>{comments}</span>
          </button>
        </div>
        <button className="flex items-center gap-1 text-gray-600 hover:text-green-500">
          <Share2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default PromptCard;
