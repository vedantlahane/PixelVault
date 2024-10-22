// src/components/feedback/Comment.jsx
import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown } from 'lucide-react';

const Comment = ({ comment }) => {
  const { author, content, likes, dislikes } = comment;
  const [upvotes, setUpvotes] = useState(likes);
  const [downvotes, setDownvotes] = useState(dislikes);
  const [voted, setVoted] = useState(false);

  const handleUpvote = () => {
    if (!voted) {
      setUpvotes(upvotes + 1);
      setVoted(true);
    }
  };

  const handleDownvote = () => {
    if (!voted) {
      setDownvotes(downvotes + 1);
      setVoted(true);
    }
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-sm mb-4">
      <div className="flex justify-between items-center">
        <span className="font-semibold text-gray-900">{author}</span>
        <div className="flex space-x-2">
          <button 
            onClick={handleUpvote} 
            className="text-green-500 hover:text-green-600 flex items-center"
          >
            <ThumbsUp size={16} /> 
            <span className="ml-1">{upvotes}</span>
          </button>
          <button 
            onClick={handleDownvote} 
            className="text-red-500 hover:text-red-600 flex items-center"
          >
            <ThumbsDown size={16} /> 
            <span className="ml-1">{downvotes}</span>
          </button>
        </div>
      </div>
      <p className="mt-2 text-gray-700">{content}</p>
    </div>
  );
};

export default Comment;
