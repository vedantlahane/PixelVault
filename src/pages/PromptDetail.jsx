import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Heart, MessageCircle, Share2, Copy, Download, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PromptDetail = () => {
  const { id } = useParams();
  const [isLiked, setIsLiked] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  // Mock data - replace with actual data fetching
  const promptData = {
    title: "Cyberpunk Butterfly Garden",
    prompt: "A luminescent garden filled with mechanical butterflies, cyberpunk style, neon colors, highly detailed, 8k --ar 16:9 --style raw --chaos 30 --v 5",
    aiModel: "Midjourney",
    author: "PixelArtist",
    createdAt: "2024-03-15",
    likes: 42,
    comments: 8,
    image: "/api/placeholder/800/600",
    tags: ["cyberpunk", "nature", "sci-fi"],
    description: "This piece combines the organic beauty of a butterfly garden with cyberpunk aesthetics. The mechanical butterflies represent the harmony between nature and technology.",
  };

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(promptData.prompt);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="container mx-auto py-8">
      <Link to="/gallery" className="inline-flex items-center text-gray-600 hover:text-primary-600 mb-6">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Gallery
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <img
              src={promptData.image}
              alt={promptData.title}
              className="w-full h-auto"
            />
          </div>

          <div className="mt-6 bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-4">About this Artwork</h2>
            <p className="text-gray-700 mb-4">{promptData.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {promptData.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-2 space-y-6">
          {/* Prompt Info */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h1 className="text-2xl font-bold mb-2">{promptData.title}</h1>
            <p className="text-gray-600 mb-4">
              by <span className="font-medium">{promptData.author}</span>
            </p>
            
            <div className="flex gap-4 mb-6">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`flex items-center gap-1 ${
                  isLiked ? 'text-red-500' : 'text-gray-600 hover:text-red-500'
                }`}
              >
                <Heart size={20} fill={isLiked ? 'currentColor' : 'none'} />
                <span>{isLiked ? promptData.likes + 1 : promptData.likes}</span>
              </button>
              <button className="flex items-center gap-1 text-gray-600 hover:text-blue-500">
                <MessageCircle size={20} />
                <span>{promptData.comments}</span>
              </button>
              <button className="flex items-center gap-1 text-gray-600 hover:text-green-500">
                <Share2 size={20} />
              </button>
            </div>

            <div className="border-t pt-4">
              <h3 className="font-semibold mb-2">Prompt Used</h3>
              <div className="bg-gray-50 rounded-lg p-3 relative group">
                <p className="text-sm text-gray-700 font-mono">{promptData.prompt}</p>
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
            </div>

            <div className="border-t mt-4 pt-4">
              <h3 className="font-semibold mb-2">Details</h3>
              <div className="space-y-2 text-sm">
                <p className="flex justify-between">
                  <span className="text-gray-600">AI Model</span>
                  <span className="font-medium">{promptData.aiModel}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-gray-600">Created</span>
                  <span className="font-medium">{promptData.createdAt}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Comments Section */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="font-semibold mb-4">Comments</h3>
            <textarea
              placeholder="Add a comment..."
              className="w-full p-3 border rounded-lg resize-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              rows={3}
            />
            <button className="mt-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
              Post Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptDetail;