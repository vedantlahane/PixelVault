// src/components/feedback/FeedbackForm.jsx
import React, { useState } from 'react';

const FeedbackForm = ({ onSubmit }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      onSubmit(comment);
      setComment('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={3}
          className="w-full rounded-md border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
          placeholder="Leave a comment..."
          required
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-primary-600 text-white rounded-md hover:bg-primary-700"
      >
        Submit Feedback
      </button>
    </form>
  );
};

export default FeedbackForm;
