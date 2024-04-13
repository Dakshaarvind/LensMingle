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
    <div>
      <h2>Filter</h2>
      <div className="filters">
        <div className="filter">
          <label>Category:</label>
          <select value={category} onChange={handleCategoryChange}>
            <option value="">Select</option>
            <option value="portrait">Portrait</option>
            <option value="landscape">Landscape</option>
            <option value="wedding">Wedding</option>
          </select>
        </div>
        {category === 'wedding' && (
          <div className="filter">
            <label>Religion:</label>
            <select value={religion} onChange={(e) => setReligion(e.target.value)}>
              <option value="">Select</option>
              <option value="hindu">Hindu</option>
              <option value="christian">Christian</option>
              <option value="muslim">Muslim</option>
            </select>
          </div>
        )}
        <div className="filter">
          <label>Keyword:</label>
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Search..."
          />
        </div>
      </div>
    </div>
  );
};

export default FilterPage;
