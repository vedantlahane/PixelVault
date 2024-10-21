import React from 'react';
import { Camera, Upload, Info } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Camera className="h-8 w-8 text-primary-600" />
            <span className="text-xl font-bold text-gray-900">PixelVault</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
              Gallery
            </a>
            <a href="/popular" className="text-gray-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
              Popular
            </a>
            <a href="/about" className="text-gray-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
              About
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <button className="bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700 flex items-center space-x-2">
              <Upload className="h-4 w-4" />
              <span>Submit</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;