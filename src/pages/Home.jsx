import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Sparkles, Users } from 'lucide-react';

const Home = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Welcome to PixelVault
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Discover and share amazing AI-generated artwork. Browse through a curated collection of prompts and create your own masterpieces.
        </p>
        
        <div className="flex justify-center gap-4">
          <Link
            to="/gallery"
            className="bg-primary-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-primary-700 transition-colors"
          >
            Explore Gallery
          </Link>
          <Link
            to="/submit"
            className="bg-white text-primary-600 border-2 border-primary-600 px-6 py-3 rounded-lg text-lg font-medium hover:bg-primary-50 transition-colors"
          >
            Submit Artwork
          </Link>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="p-6 rounded-lg bg-white shadow-md">
            <Camera className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">AI Artwork</h3>
            <p className="text-gray-600">Showcase your AI-generated masterpieces with the community</p>
          </div>
          
          <div className="p-6 rounded-lg bg-white shadow-md">
            <Sparkles className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Prompts</h3>
            <p className="text-gray-600">Share and discover effective prompts for various AI models</p>
          </div>
          
          <div className="p-6 rounded-lg bg-white shadow-md">
            <Users className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Community</h3>
            <p className="text-gray-600">Connect with other AI art enthusiasts and creators</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;