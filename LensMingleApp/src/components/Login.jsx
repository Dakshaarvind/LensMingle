import React, { useState } from 'react';
import Signup from './Signup'; // Import the Signup component
import FilterPage from './FilterPage'; // Import the FilterPage component

const Login = () => {
  const [showSignup, setShowSignup] = useState(false); // State to manage whether to show the signup form
  const [showTextLogin, setShowTextLogin] = useState(true); // State to manage whether to show the login header
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage whether the user is logged in

  const handleLogin = (event) => {
    event.preventDefault();

    // Get the email and password from local storage
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    // Get the email and password entered by the user
    const enteredEmail = event.target.elements.email.value;
    const enteredPassword = event.target.elements.password.value;

    // Check if the entered email and password match the stored email and password
    if (enteredEmail === storedEmail && enteredPassword === storedPassword) {
      setIsLoggedIn(true); // Set isLoggedIn to true if the email and password match
    } else {
      alert('Invalid email or password');
    }
  };

  if (isLoggedIn) {
    return <FilterPage />; // Render the FilterPage if the user is logged in
  }

  if (showSignup) {
    return <Signup />;
  }

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-purple-200">
      <div className="p-8 bg-white rounded shadow-md">
        {showTextLogin && !showSignup && <h1 className="text-2xl font-bold mb-4">Login</h1>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input type="email" name="email" className="w-full px-3 py-2 border rounded-md" />
            <label htmlFor="email" className="text-sm text-gray-600">Your Email</label>
          </div>
          <div className="mb-4">
            <input type="password" name="password" className="w-full px-3 py-2 border rounded-md" />
            <label htmlFor="password" className="text-sm text-gray-600">Your Password</label>
          </div>
          <div className="mb-4 flex items-center">
            <input type="checkbox" id="rememberMe" className="mr-2" />
            <label htmlFor="rememberMe" className="text-sm text-gray-600">Remember Me</label>
          </div>
          <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded-md">Login</button>
          <div className="mt-4">
            <span onClick={() => {setShowSignup(true); setShowTextLogin(false);}} className="text-blue-500 cursor-pointer">Create an Account</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
