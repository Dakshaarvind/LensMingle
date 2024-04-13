import React from 'react';

const ResultsPage = () => {
  // Dummy profile data
  const profiles = [
    { name: 'John Doe', picture: '0596bdb89b60fe771acd2f5972a9d3e3.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { name: 'Jane Smith', picture: 'cool-boys-profile-picture-for-facebook-12.jpg', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { name: 'Michael Johnson', picture: 'OIP.jpg', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    { name: 'Mad Johnson', picture: 'R.jpg', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    // Add more dummy profiles as needed
  ];

  // Function to generate abbreviated description
  const generateAbbreviation = (description) => {
    return description.substring(0, 50) + '...';
  };

  return (
    <div className="bg-purple-200 p-8">
      <h2 className="text-2xl font-bold mb-4">Results</h2>
      <div className="grid grid-cols-2 gap-4">
        {profiles.map((profile, index) => (
          <div key={index} className="bg-white rounded-lg p-4 shadow-md">
            <img src={profile.picture} alt={profile.name} className="w-48 h-48 mx-auto mb-4 rounded-full" />
            <h3 className="text-lg font-semibold">{profile.name}</h3>
            <p className="text-gray-600">{generateAbbreviation(profile.description)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultsPage;

