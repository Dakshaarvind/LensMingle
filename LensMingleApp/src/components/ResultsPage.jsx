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
    <div style={{ backgroundColor: '#9F7AEA', padding: '450px' }}>
      <h2>Results</h2>
      <div className="profiles">
        {profiles.map((profile, index) => (
          <div key={index} className="profile">
            <img src={profile.picture} alt={profile.name} style={{width: '190px', height: '190px' }} />
            <h3>{profile.name}</h3>
            <p>{generateAbbreviation(profile.description)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultsPage;
