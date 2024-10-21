import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-white border-t py-4">
        <div className="container text-center text-gray-600 text-sm">
          © 2024 PixelVault. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;