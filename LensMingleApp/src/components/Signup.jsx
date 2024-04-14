import React, { useState } from 'react';
import Login from "./Login";

function Signup() {
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showTextSignup, setShowTextSignup] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username}, Email: ${email}, Password: ${password}`);

    // Store the email and password in local storage
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    // Navigate to the login menu
    setShowLogin(true);
  };

  if (showLogin) {
    return <Login />;
  }

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-purple-200">
      <div className="p-8 bg-white rounded shadow-md">
        {showTextSignup && !showLogin && <h1 className="text-2xl font-bold mb-4">Sign Up</h1>}
        <form onSubmit={handleSubmit}>
          <label className="block mb-4">
            <span className="text-sm text-gray-600">Username:</span>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full px-3 py-2 border rounded-md mt-1" />
          </label>
          <label className="block mb-4">
            <span className="text-sm text-gray-600">Email:</span>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 border rounded-md mt-1" />
          </label>
          <label className="block mb-4">
            <span className="text-sm text-gray-600">Password:</span>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 border rounded-md mt-1" />
          </label>
          <input type="submit" value="Submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded-md" />
        </form>
        <span onClick={() => setShowLogin(true)} className="text-blue-500 cursor-pointer mt-4 block">Go to Login</span>
      </div>
    </div>
  );
}

export default Signup;
