import React from 'react';
import SubmitForm from '../components/forms/SubmitForm';

const Submit = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Submit Your AI Artwork
          </h1>
          <p className="text-gray-600 mb-6">
            Share your AI-generated artwork with the community. Make sure to include the prompt and settings used to help others learn and get inspired.
          </p>
          
          <SubmitForm />
        </div>

        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h2 className="text-lg font-semibold text-blue-800 mb-2">
            Submission Guidelines
          </h2>
          <ul className="list-disc list-inside text-blue-700 space-y-1">
            <li>Make sure you have the right to share the artwork</li>
            <li>Include the complete prompt used to generate the image</li>
            <li>Specify which AI model and version was used</li>
            <li>Add relevant tags to help others find your work</li>
            <li>Keep it family-friendly and follow community guidelines</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Submit;