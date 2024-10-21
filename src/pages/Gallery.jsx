import React, { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import PromptCard from '../components/gallery/PromptCard';

// Sample data - replace with your actual data later
const samplePrompts = [
  {
    id: 1,
    title: "Cyberpunk Butterfly Garden",
    prompt: "A luminescent garden filled with mechanical butterflies, cyberpunk style, neon colors, highly detailed, 8k --ar 16:9 --style raw --chaos 30 --v 5",
    aiModel: "Midjourney",
    author: "PixelArtist",
    likes: 42,
    comments: 8,
    image: "/api/placeholder/400/300"
  },
  {
    id: 2,
    title: "Crystal Desert Oasis",
    prompt: "A desert oasis made entirely of crystals, purple sunset, geometric patterns, crystalline water, ultra realistic, 8k --ar 16:9 --stylize 1000",
    aiModel: "DALL-E",
    author: "CrystalMaster",
    likes: 35,
    comments: 5,
    image: "/api/placeholder/400/300"
  },
  // Add more sample prompts...
];

const Gallery = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedModel, setSelectedModel] = useState('all');

  const aiModels = ['all', 'Midjourney', 'DALL-E', 'Stable Diffusion'];

  return (
    <div className="container mx-auto py-8">
      {/* Search and Filter Section */}
      <div className="mb-8 space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Explore AI Artworks</h1>
        
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          <div className="relative flex-grow md:max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search prompts..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex gap-2">
            {aiModels.map((model) => (
              <button
                key={model}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedModel === model
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                onClick={() => setSelectedModel(model)}
              >
                {model}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {samplePrompts.map((prompt) => (
          <PromptCard key={prompt.id} {...prompt} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;