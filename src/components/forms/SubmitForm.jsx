// src/components/forms/SubmitForm.jsx
import React, { useState } from 'react';
import { Upload, X, Image as ImageIcon } from 'lucide-react';

const SubmitForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    tags: ''
  });
  const [previewImage, setPreviewImage] = useState(null);

  // Categories for diverse forms of art
  const artCategories = ['Photography', 'Painting', 'Digital Art', 'Mixed Media'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setPreviewImage(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, image: previewImage });
    // Add your submission logic here (e.g., send the data to an API or a database)
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Image Upload Section */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Artwork Image
        </label>
        <div className="relative">
          {previewImage ? (
            <div className="relative">
              <img
                src={previewImage}
                alt="Preview"
                className="w-full h-64 object-cover rounded-lg"
              />
              <button
                type="button"
                onClick={removeImage}
                className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
              >
                <X size={20} />
              </button>
            </div>
          ) : (
            <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-primary-500 hover:bg-gray-50">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <ImageIcon className="w-12 h-12 text-gray-400 mb-3" />
                <p className="mb-2 text-sm text-gray-500">
                  <span className="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-gray-500">PNG, JPG or GIF (MAX. 800x400px)</p>
              </div>
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>
          )}
        </div>
      </div>

      {/* Title Input */}
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          required
        />
      </div>

      {/* Art Category Selection */}
      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-700">
          Art Category
        </label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          required
        >
          <option value="">Select Art Category</option>
          {artCategories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      {/* Description Input */}
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description (optional)
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
        />
      </div>

      {/* Tags Input */}
      <div>
        <label htmlFor="tags" className="block text-sm font-medium text-gray-700">
          Tags (comma separated)
        </label>
        <input
          type="text"
          id="tags"
          name="tags"
          value={formData.tags}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          placeholder="e.g., nature, abstract, cityscape"
        />
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          <Upload className="w-5 h-5 mr-2" />
          Submit Artwork
        </button>
      </div>
    </form>
  );
};

export default SubmitForm;
