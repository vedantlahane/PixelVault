// src/components/pages/Gallery.jsx
import React, { useState } from 'react';
import PromptCard from '../PromptCard'; // Reusing the card component, but generalizing it for various art forms

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Sample data (in real case, you would fetch this data from an API)
  const artworks = [
    {
      id: 1,
      image: '/images/photography1.jpg',
      title: 'Golden Hour',
      category: 'Photography',
      author: 'John Doe',
      likes: 150,
      comments: 12
    },
    {
      id: 2,
      image: '/images/painting1.jpg',
      title: 'Mountain View',
      category: 'Painting',
      author: 'Jane Smith',
      likes: 120,
      comments: 8
    },
    {
      id: 3,
      image: '/images/digitalart1.jpg',
      title: 'Future City',
      category: 'Digital Art',
      author: 'DigitalArtist',
      likes: 200,
      comments: 22
    },
    // Add more artwork objects
  ];

  const categories = ['All', 'Photography', 'Painting', 'Digital Art', 'Mixed Media'];

  // Filter artworks based on selected category
  const filteredArtworks = selectedCategory === 'All' 
    ? artworks 
    : artworks.filter((art) => art.category === selectedCategory);

  return (
    <div className="container mx-auto py-8">
      {/* Category Filter */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Gallery</h2>
        <div className="flex space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md font-medium ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-primary-600 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArtworks.map((art) => (
          <PromptCard
            key={art.id}
            id={art.id}
            image={art.image}
            title={art.title}
            author={art.author}
            likes={art.likes}
            comments={art.comments}
            prompt={null} // This is not AI-specific, so we don't need the prompt
          />
        ))}
      </div>

      {/* No artworks found */}
      {filteredArtworks.length === 0 && (
        <div className="text-center text-gray-600 py-12">
          No artworks found in this category.
        </div>
      )}
    </div>
  );
};

export default Gallery;
