import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Camera, Upload, Search } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path ? 'text-primary-600' : 'text-gray-600';
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Camera className="h-8 w-8 text-primary-600" />
            <span className="text-xl font-bold text-gray-900">PixelVault</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/gallery" 
              className={`${isActive('/gallery')} hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium`}
            >
              Gallery
            </Link>
            <Link 
              to="/about" 
              className={`${isActive('/about')} hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium`}
            >
              About
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Link 
              to="/submit"
              className="bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700 flex items-center space-x-2"
            >
              <Upload className="h-4 w-4" />
              <span>Submit</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;