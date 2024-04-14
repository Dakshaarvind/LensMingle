import React from 'react';

function LastPage() {
  return (
    <div className="bg-gradient-to-b from-fuchsia-600 to-blue-300 rounded shadow-lg p-6">
      <div className="profile text-center mb-8">
        <img src="kim.png" alt="Profile Picture" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white" />
        <h2 className="text-xl font-bold text-white">Kim Bradley</h2>
        <p className="text-white bg-black bg-opacity-50 rounded p-2">Honor your heritage! I have extensive experience capturing the beauty and traditions of diverse cultural weddings. Whether it's a vibrant Hindu ceremony or a classic Jewish chuppah, I'll document your special day with sensitivity and respect.</p>
      </div>
      <div className="contact-details mb-8 bg-white bg-opacity-50 rounded p-4">
        <h3 className="text-lg font-semibold mb-2">Contact Details</h3>
        <p>Email: kimB@work.com</p>
        <p>Phone: +1907356299</p>
        <p>Address: 554 Clark Ave, Los Angeles, USA</p>
      </div>
      <div className="photos mb-8">
        <h3 className="text-lg font-semibold mb-2">Photos</h3>
        <div className="flex flex-wrap justify-center">
          <img src="Kim1.jpg" alt="Photo 1" className="w-1/3 h-48 rounded-md object-cover m-2 border-2 border-white" />
          <img src="Kim2.jpg" alt="Photo 2" className="w-1/3 h-48 rounded-md object-cover m-2 border-2 border-white" />
          <img src="Kim3.jpg" alt="Photo 3" className="w-1/3 h-48 rounded-md object-cover m-2 border-2 border-white" />
          <img src="Kim4.jpg" alt="Photo 4" className="w-1/3 h-48 rounded-md object-cover m-2 border-2 border-white" />
          <img src="Kim5.jpg" alt="Photo 5" className="w-1/3 h-48 rounded-md object-cover m-2 border-2 border-white" />
          <img src="Kim6.jpg" alt="Photo 4" className="w-1/3 h-48 rounded-md object-cover m-2 border-2 border-white" />
        </div>
      </div>
      <div className="videos mb-8">
        <h3 className="text-lg font-semibold mb-2">Videos</h3>
        <div className="flex justify-center">
          <video controls width="160" height="120" className="m-2 border-2 border-white rounded">
            <source src="vid1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video controls width="160" height="120" className="m-2 border-2 border-white rounded">
            <source src="vid2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default LastPage;
