import React from 'react';

function LastPage() {
  return (
    <div className="container mx-auto p-8 bg-gradient-to-b from-fuchsia-600 to-blue-300 rounded shadow-lg">
      <div className="profile text-center mb-8">
        <img src="OIP.jpg" alt="Profile Picture" className="w-32 h-32 rounded-full mx-auto mb-4" />
        <h2 className="text-xl font-bold">User Name</h2>
        <p>User Bio</p>
      </div>
      <div className="contact-details mb-8">
        <h3 className="text-lg font-semibold mb-2">Contact Details</h3>
        <p>Email: user@example.com</p>
        <p>Phone: +1234567890</p>
        <p>Address: 123 Main St, City, Country</p>
      </div>
      <div className="photos mb-8">
        <h3 className="text-lg font-semibold mb-2">Photos</h3>
        <div className="flex justify-center">
          <img src="ai.jpeg" alt="Photo 1" className="w-48 h-48 rounded-md object-cover m-2" />
          <img src="boy.jpg" alt="Photo 2" className="w-48 h-48 rounded-md object-cover m-2" />
          <img src="girl.jpg" alt="Photo 3" className="w-48 h-48 rounded-md object-cover m-2" />
          <img src="OIP.jpg" alt="Photo 4" className="w-48 h-48 rounded-md object-cover m-2" />
        </div>
      </div>
      <div className="videos mb-8">
        <h3 className="text-lg font-semibold mb-2">Videos</h3>
        <div className="flex justify-center">
          <video controls width="160" height="120" className="m-2">
            <source src="vid1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video controls width="160" height="120" className="m-2">
            <source src="vid2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default LastPage;
