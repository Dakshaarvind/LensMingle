import React, { useState } from 'react';

const ResultsPage = () => {
  // Dummy profile data
  const profiles = [
    { name: 'John Doe', picture: '0596bdb89b60fe771acd2f5972a9d3e3.jpg', description: "Honor your heritage! I have extensive experience capturing the beauty and traditions of diverse cultural weddings. Whether it's a vibrant Hindu ceremony or a classic Jewish chuppah, I'll document your special day with sensitivity and respect.", price: '$50' },
    { name: 'Jane Smith', picture: 'cool-boys-profile-picture-for-facebook-12.jpg', description: "Make your birthday celebration unforgettable! Capture the joy, laughter, and special moments of your birthday party with vibrant photography. We'll document all the fun, from playful group shots to heartwarming candids, creating cherished memories for you and your guests.", price: '$60' },
    { name: 'Michael Johnson', picture: 'OIP.jpg', description:"Say 'Yes!' with the perfect proposal photo! We specialize in capturing the magic and emotion of your proposal. We'll discreetly capture the moment you pop the question, creating a beautiful and timeless memory to cherish forever." , price: '$70' },
    { name: 'Mad Johnson', picture: 'R.jpg', description: "Celebrate your quinceañera in style! Document this special coming-of-age celebration with stunning photography. We'll capture the elegance of the ceremony, the vibrancy of the party, and all the precious moments with family and friends.", price: '$80' },
    { name: 'Alice Walker', picture: 'girl.jpg', description: "Commemorate your graduation achievement! Capture the pride and excitement of your graduation day with stunning photography. We offer individual portraits, group photos with classmates, and candid shots of the ceremony, creating a lasting visual record of this momentous occasion.", price: '$90' },
    { name: 'William Lee', picture: 'boy.jpg', description: "Elevate your conference experience! Capture the energy and professionalism of your event with dynamic photography. We offer team photos, candid shots of attendees, and stage presentations, creating a lasting visual record of your successful conference.", price: '$100' },
    { name: 'Olivia Jones', picture: 'ai.jpeg', description: "Welcome your little one with love! Capture the excitement and anticipation of your baby shower with heartwarming photography. We'll document the beautiful decorations, the fun games with friends, and the joy of preparing for your new arrival.", price: '$110' },
  ];

  // State variable to keep track of expanded profiles
  const [expandedProfile, setExpandedProfile] = useState(null);

  // Function to handle profile expansion
  const handleProfileExpansion = (index) => {
    setExpandedProfile(expandedProfile === index ? null : index);
  };

  return (
    <div className="bg-purple-200 p-8">
      <h2 className="text-2xl font-bold mb-4">Find your photographer!</h2>
      <div className="grid grid-cols-2 gap-4">
        {profiles.map((profile, index) => (
          <div key={index} className="bg-white rounded-lg p-4 shadow-md">
            <button onClick={() => handleProfileExpansion(index)} className="w-48 h-48 mx-auto mb-4 rounded-full">
              <img src={profile.picture} alt={profile.name} className="w-full h-full rounded-full" />
            </button>
            <h3 className="text-lg font-semibold">{profile.name}</h3>
            <p className="text-gray-600 font-bold">Price: {profile.price}</p>
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
