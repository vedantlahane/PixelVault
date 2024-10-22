// src/components/artists/ArtistProfile.jsx
import React from 'react';
import { Instagram, Twitter, Globe } from 'lucide-react'; // Icons for social links
import PromptCard from '../PromptCard'; // To display artworks

const ArtistProfile = ({ artist }) => {
  const { name, bio, avatar, artworks, socialLinks } = artist;

  return (
    <div className="container mx-auto py-8">
      {/* Artist Info */}
      <div className="flex items-center space-x-6 mb-8">
        <img
          src={avatar}
          alt={`${name}'s Avatar`}
          className="w-24 h-24 rounded-full object-cover shadow-md"
        />
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{name}</h2>
          <p className="text-gray-600">{bio}</p>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="flex items-center space-x-4 mb-8">
        {socialLinks.instagram && (
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-primary-600"
          >
            <Instagram size={24} />
          </a>
        )}
        {socialLinks.twitter && (
          <a
            href={socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-primary-600"
          >
            <Twitter size={24} />
          </a>
        )}
        {socialLinks.website && (
          <a
            href={socialLinks.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-primary-600"
          >
            <Globe size={24} />
          </a>
        )}
      </div>

      {/* Portfolio: Artworks by Artist */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Artworks by {name}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {artworks.map((art) => (
            <PromptCard
              key={art.id}
              id={art.id}
              image={art.image}
              title={art.title}
              author={name}
              likes={art.likes}
              comments={art.comments}
              prompt={null} // No need for prompt here
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Example usage with mock artist data
const exampleArtist = {
  name: 'John Doe',
  bio: 'A passionate photographer and digital artist from New York, specializing in abstract and nature photography.',
  avatar: '/images/avatar-johndoe.jpg',
  artworks: [
    { id: 1, image: '/images/photo1.jpg', title: 'Sunset Bliss', likes: 150, comments: 10 },
    { id: 2, image: '/images/photo2.jpg', title: 'Morning Dew', likes: 120, comments: 8 },
    { id: 3, image: '/images/digitalart2.jpg', title: 'Virtual Dreams', likes: 200, comments: 15 },
  ],
  socialLinks: {
    instagram: 'https://instagram.com/johndoe',
    twitter: 'https://twitter.com/johndoe',
    website: 'https://johndoe.com'
  }
};

// Rendering example artist profile
const ArtistProfilePage = () => {
  return <ArtistProfile artist={exampleArtist} />;
};

export default ArtistProfilePage;
