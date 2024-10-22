// src/components/feedback/Feedback.jsx
import React, { useState } from 'react';
import Comment from './Comment';
import FeedbackForm from './FeedbackForm';

const Feedback = () => {
  const [comments, setComments] = useState([
    { id: 1, author: 'ArtLover123', content: 'Amazing artwork, I love the details!', likes: 10, dislikes: 2 },
    { id: 2, author: 'CreativeMind', content: 'Great use of colors! Very inspiring.', likes: 7, dislikes: 1 },
  ]);

  const addComment = (newComment) => {
    const comment = {
      id: comments.length + 1,
      author: 'Anonymous',  // Replace with actual user data when implementing authentication
      content: newComment,
      likes: 0,
      dislikes: 0,
    };
    setComments([comment, ...comments]);
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Community Feedback</h2>
      <FeedbackForm onSubmit={addComment} />
      <div className="mt-6 space-y-4">
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default Feedback;
