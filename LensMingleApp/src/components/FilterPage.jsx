// App.jsx

import React, { useState } from 'react';

const FilterPage = () => {
  const [category, setCategory] = useState('');
  const [religion, setReligion] = useState('');
  const [keyword, setKeyword] = useState('');

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    // If category is wedding, enable the religion dropdown
    if (e.target.value === 'wedding') {
      setReligion('');
    }
  };

  return (
    <div className="w-screen h-screen">
      <div className="relative bg-gradient-to-r from-white to-purple-500 p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-extrabold mb-6 text-yellow"> Welcome! What are you looking for?</h1>
        <div className="flex space-x-4">
          <div className="flex items-center">
            <label className="w-24">Category:</label>
            <select
              className="w-full border rounded-md p-2"
              value={category}
              onChange={handleCategoryChange}
            >
              <option value="">Select</option>
              <option value="portrait">Portrait</option>
              <option value="landscape">Landscape</option>
              <option value="wedding">Wedding</option>
            </select>
          </div>
          {category === 'wedding' && (
            <div className="flex items-center">
              <label className="w-24">Religion:</label>
              <select
                className="w-full border rounded-md p-2"
                value={religion}
                onChange={(e) => setReligion(e.target.value)}
              >
                <option value="">Select</option>
                <option value="hindu">Hindu</option>
                <option value="christian">Christian</option>
                <option value="muslim">Muslim</option>
              </select>
            </div>
          )}
          <div className="flex items-center">
            <label className="w-24">Keyword:</label>
            <input
              type="text"
              className="w-full border rounded-md p-2"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Search..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPage;
