import React from 'react';

const ArtistProfile = ({ artist }) => {
  const {
    name,
    bio,
    profilePicture,
    artCategory,
    portfolio,
    socialLinks
  } = artist;

  return (
    <div className="container mx-auto py-8">
      <div className="flex items-start space-x-8">
        {/* Profile Picture */}
        <div className="w-1/3">
          <img
            src={profilePicture}
            alt={`${name}'s profile`}
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>

        {/* Artist Info */}
        <div className="w-2/3">
          <h1 className="text-4xl font-bold mb-4">{name}</h1>
          <p className="text-gray-600 mb-6">{bio}</p>

          {/* Art Category */}
          <div className="mb-6">
            <span className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
              {artCategory}
            </span>
          </div>

          {/* Portfolio Gallery */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {portfolio.map((artwork, index) => (
              <div key={index} className="relative">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-48 object-cover rounded-lg shadow-sm"
                />
                <h3 className="text-lg font-semibold mt-2">{artwork.title}</h3>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistProfile;
