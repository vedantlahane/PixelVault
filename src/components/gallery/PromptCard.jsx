import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Copy, MessageCircle, Share2, Heart, Sparkles } from 'lucide-react';

const PromptCard = ({
  id,
  image = "/api/placeholder/400/300",
  title = "Cyberpunk Butterfly Garden",
  prompt = "A luminescent garden filled with mechanical butterflies, cyberpunk style, neon colors, highly detailed, 8k --ar 16:9 --style raw --chaos 30 --v 5",
  aiModel = "Midjourney",
  author = "PixelArtist",
  likes = 42,
  comments = 8
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(prompt);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Link to={`/prompt/${id}`}>
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs flex items-center gap-1">
            <Sparkles size={12} />
            {aiModel}
          </div>
        </div>
      </Link>

      <div className="p-4">
        <Link to={`/prompt/${id}`}>
          <h3 className="font-bold text-lg mb-2 hover:text-primary-600">{title}</h3>
        </Link>
        
        <div className="bg-gray-50 rounded-lg p-3 relative group">
          <p className="text-sm text-gray-700 font-mono">{prompt}</p>
          <button 
            onClick={handleCopyPrompt}
            className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            {isCopied ? (
              <span className="text-green-500 text-xs">Copied!</span>
            ) : (
              <Copy size={16} className="text-gray-500 hover:text-blue-500" />
            )}
          </button>
        </div>

        <p className="text-sm text-gray-600 mt-2">by {author}</p>
      </div>

      <div className="px-4 py-3 border-t flex justify-between items-center">
        <div className="flex gap-4">
          <button 
            onClick={handleLike}
            className={`flex items-center gap-1 transition-colors ${
              isLiked ? 'text-red-500' : 'text-gray-600 hover:text-red-500'
            }`}
          >
            <Heart size={18} fill={isLiked ? 'currentColor' : 'none'} />
            <span className="text-sm">{isLiked ? likes + 1 : likes}</span>
          </button>
          <button className="flex items-center gap-1 text-gray-600 hover:text-blue-500 transition-colors">
            <MessageCircle size={18} />
            <span className="text-sm">{comments}</span>
          </button>
        </div>
        <button className="flex items-center gap-1 text-gray-600 hover:text-green-500 transition-colors">
          <Share2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default PromptCard;