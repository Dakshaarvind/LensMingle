import React, { useState, useEffect } from 'react';

const FilterPage = () => {
  const [category, setCategory] = useState('');
  const [religion, setReligion] = useState('');
  const [keyword, setKeyword] = useState('');
  const [minPrice, setMinPrice] = useState(''); // Add this line
  const [maxPrice, setMaxPrice] = useState(''); // Add this line
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch JSON data from the public folder
    fetch('/data.json')
      .then(response => response.json())
      .then(jsonData => setData(jsonData))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    // If category is wedding, enable the religion dropdown
    if (e.target.value === 'wedding') {
      setReligion('');
    }
  };

  const handleSubmit = () => {
    // Filter the data based on the selected category, religion, keyword, and price range
    const filteredData = data.filter(item => {
      const categoryMatch = !category || item.category === category;
      const religionMatch = !religion || item.religion === religion;
      const keywordMatch = !keyword || 
        item.keyword.toLowerCase().includes(keyword.toLowerCase()) ||
        item.description.toLowerCase().includes(keyword.toLowerCase());
      const priceMatch = (!minPrice || item.price >= minPrice) && (!maxPrice || item.price <= maxPrice);
  
      // Return true if at least one condition matches
      return categoryMatch || religionMatch || keywordMatch || priceMatch;
    });
  
    console.log(filteredData);
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
          <div className="flex items-center">
            <label className="w-24">Min Price:</label>
            <input
              type="number"
              className="w-full border rounded-md p-2"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              placeholder="Min Price..."
            />
          </div>
          <div className="flex items-center">
            <label className="w-24">Max Price:</label>
            <input
              type="number"
              className="w-full border rounded-md p-2"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              placeholder="Max Price..."
            />
          </div>
        </div>
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
  
      {/* New fancy landing page section (without images) */}
      <div className="flex flex-col justify-center items-center mt-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Find the perfect image for your project
        </h2>
        <p className="text-xl text-gray-600 text-center px-16">
          Our extensive library offers a wide variety of high-quality images to suit any need.
        </p>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
            {/* Placeholder for image 1 */}
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
            {/* Placeholder for image 2 */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPage;
