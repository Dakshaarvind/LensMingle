import React, { useState, useEffect } from 'react';
import ResultsPage from './ResultsPage';

const FilterPage = () => {
  const [category, setCategory] = useState('');
  const [religion, setReligion] = useState('');
  const [keyword, setKeyword] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [data, setData] = useState([]);
  const [showResults, setShowResults] = useState(false); // State to toggle showing results
  const [filteredData, setFilteredData] = useState([]); // State to store filtered data

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
      const priceMatch = (!minPrice || parseInt(item.price.slice(1)) >= parseInt(minPrice)) && (!maxPrice || parseInt(item.price.slice(1)) <= parseInt(maxPrice));
      
      // Return false if priceMatch is false, regardless of other conditions
      if (!priceMatch) {
        console.log("Price does not match:", item.name);
        return false;
      }
      
      console.log("Category:", category);
      console.log("Religion:", religion);
      console.log("Keyword:", keyword);

      const categoryMatch = !category || (item.description && item.description.toLowerCase().includes(category.toLowerCase()));
      const religionMatch = !religion || (item.description && item.description.toLowerCase().includes(religion.toLowerCase()));
      const keywordMatch = !keyword || (item.description && item.description.toLowerCase().includes(keyword.toLowerCase()));
  
      // Return true if priceMatch is true, or any other condition is true
      return categoryMatch || religionMatch || keywordMatch;
    });
  
    console.log(filteredData);
    setFilteredData(filteredData); // Store filtered data
    setShowResults(true); // Show results after submitting
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

      {/* Render ResultsPage if showResults is true */}
      {showResults && (
        <div className="mt-8">
          <ResultsPage data={filteredData} />
        </div>
      )}
    </div>
  );
};

export default FilterPage;
