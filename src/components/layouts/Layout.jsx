// src/components/Layout.jsx
import React from 'react';
import Navbar from './Navbar';
// import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto py-8">
        {children}
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
