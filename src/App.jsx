import React from 'react';
import Layout from './components/layouts/Layout';

function App() {
  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Welcome to PixelVault
        </h1>
        <p className="text-gray-600">
          Discover and share amazing AI-generated artwork and their prompts.
        </p>
      </div>
    </Layout>
  );
}

export default App;