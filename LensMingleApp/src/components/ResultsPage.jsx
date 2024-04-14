import React, { useState } from 'react';
import LastPage from './LastPage'; // Import the component you want to render

const ResultsPage = ({ data }) => {
  // State variable to keep track of expanded profiles
  const [expandedProfile, setExpandedProfile] = useState(null);
  
  // State variable to determine if the LastPage component should be rendered
  const [viewWorkClicked, setViewWorkClicked] = useState(false);

  // Function to handle profile expansion
  const handleProfileExpansion = (index) => {
    setExpandedProfile(expandedProfile === index ? null : index);
  };

  // Function to handle "View Work" button click
  const handleViewWork = () => {
    setViewWorkClicked(true); // Set the state to true when the button is clicked
  };

  // If the "View Work" button was clicked, render the LastPage component
  if (viewWorkClicked) {
    return <LastPage />;
  }

  // Otherwise, render the ResultsPage component
  return (
    <div className="bg-purple-200 p-8">
      <h2 className="text-2xl font-bold mb-4">Find your photographer!</h2>
      <div className="grid grid-cols-2 gap-4">
        {data.map((profile, index) => (
          <div key={index} className="bg-white rounded-lg p-4 shadow-md">
            <button onClick={() => handleProfileExpansion(index)} className="w-48 h-48 mx-auto mb-4 rounded-full">
              <img src={profile.picture} alt={profile.name} className="w-full h-full rounded-full" />
            </button>
            <h3 className="text-lg font-semibold">{profile.name}</h3>
            <p className="text-gray-600 font-bold">Price: {profile.price}</p>
            <button onClick={handleViewWork} className="bg-blue-500 text-white px-4 py-2 rounded-md">View Work</button>
            {/* Show full description if the profile is expanded */}
            {expandedProfile === index && (
              <p className="text-gray-600">{profile.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultsPage;
